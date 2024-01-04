<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  text: string
  intervalMs?: number
}>();

const propsText = computed(() => props.text.replace(/\\n/g, '\n').split(''));
const typingInterval = computed(() => props.intervalMs || 100);
const typingIdx = ref(0);
const typedText = ref('');
let intervalId: NodeJS.Timeout | number = 0;

const propsTextLength = computed(() => propsText.value.length);

function typing() {
  if (typingIdx.value < propsTextLength.value) {
    typedText.value += propsText.value[typingIdx.value] || '';
    typingIdx.value += 1;
  } else {
    clearInterval(intervalId);
  }
}

function startTyping() {
  typedText.value = '';
  typingIdx.value = 0;
  intervalId = setInterval(typing, typingInterval.value);
}

startTyping();

watch(
  () => [props.text, props.intervalMs],
  () => {
    clearInterval(intervalId);
    startTyping();
  },
);

</script>
<template>
  <p
    class="whitespace-pre-wrap"
  >
    {{ typedText }}
  </p>
</template>
