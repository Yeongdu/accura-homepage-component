<script setup lang="ts">
import {
  ref, onMounted, onUnmounted, computed,
} from 'vue';

const props = defineProps({
  transitionDurationMs: {
    type: Number,
    default: 700,
    required: false,
  },
  transitionDelayMs: {
    type: Number,
    default: 300,
    required: false,
  },
});

const transitionDelay = computed(() => props.transitionDelayMs);
const transitionDuration = computed(() => props.transitionDurationMs);

const isVisible = ref(false);
const domRef = ref(null);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isVisible.value) {
      isVisible.value = true;
      if (domRef.value) {
        observer.unobserve(domRef.value);
      }
    }
  });
});

onMounted(() => {
  if (domRef.value) {
    observer.observe(domRef.value);
  }
});

onUnmounted(() => {
  if (domRef.value) {
    observer.unobserve(domRef.value);
  }
});
</script>
<template>
  <div
    ref="domRef"
    :style="{ transition: `${transitionDuration}ms ${transitionDelay}ms` }"
    :class="['fade-animation', { 'is-visible': isVisible }]"
  >
    <slot />
  </div>
</template>
<style>
.fade-animation {
  opacity: 0;
  transform: translateY(1.8rem);
}

.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
