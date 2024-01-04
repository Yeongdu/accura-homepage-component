<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  text: string
  intervalMs?: number
}>();

const propsText = computed(() => props.text);
const textCut = propsText.value.split('');
const interval = computed(() => props.intervalMs || 200);

</script>
<template>
  <div>
    <span
      v-for="(char, i) in textCut"
      :key="i"
      :style="{ 'animation-delay': `${i * interval}ms` }"
      class="rotate-show-text"
    >{{ char }}</span>
  </div>
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
