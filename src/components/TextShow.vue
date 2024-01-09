<script lang="ts" setup>
import { computed, ref } from 'vue';
import AppearEffect from './AppearEffect.vue';

const props = defineProps<{
  text: string
  intervalMs?: number
}>();


const EffectStart = ref(false);
const propsText = computed(() => props.text);
const textCut = propsText.value.split('');
const interval = computed(() => props.intervalMs || 200);

function handleShow() {
 EffectStart.value = true;
};
</script>
<template>
  <AppearEffect @show="handleShow">
    <span
      v-for="(char, i) in textCut"
      :key="i"
      :style="{ 'animation-delay': `${i * interval}ms` }"
      :class="EffectStart ? 'rotate-show-text':''"
    >{{ char }}</span>
  </AppearEffect>
</template>
<style scoped>
@keyframes fadeInAndRotate {
  0% {
    opacity: 0;
    transform: rotateY(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
  }
}
.rotate-show-text {
  animation: fadeInAndRotate 1s ease-out forwards;
  display: inline-block;
  white-space: pre-wrap;
  transform:  rotateY(90deg);
}
</style>
