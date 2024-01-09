<script setup lang="ts">
import {
  ref, onMounted, onUnmounted
} from 'vue';

const emit = defineEmits<{
  (e: 'show', id?: boolean): void;
}>();

const isVisible = ref(false);
const domRef = ref(null);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isVisible.value) {
      isVisible.value = true;
      emit('show', true);
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
    :class="['fade-animation', { 'is-visible': isVisible }]"
  >
    <slot />
  </div>
</template>
<style>
.fade-animation {
  opacity: 0;
}

.is-visible {
  opacity: 1;
}
</style>
