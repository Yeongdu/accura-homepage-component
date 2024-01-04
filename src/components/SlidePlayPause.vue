<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const emit = defineEmits<{
  (e: 'update:sindex', sindex: number):void,
}>();

const props = defineProps({
  listLength: {
    type: Number,
    default: 3,
    required: true,
  },
  intervalMs: {
    type: Number,
    default: 2000,
    required: false,
  },
  height: {
    type: String,
    default: '18rem',
    required: false,
  },
});

const listIndex = ref(0);
const threshold = 50;
const startClientX = ref(0);
const isDragging = ref(false);
const endClientX = ref(0);
let intervalId: NodeJS.Timeout | number = 0;
const isPlaying = ref(true);

function nextSlide() {
  listIndex.value = (listIndex.value + 1) % props.listLength;
}
function prevSlide() {
  listIndex.value = (listIndex.value - 1 + props.listLength) % props.listLength;
}
function startInterval() {
  intervalId = setInterval(nextSlide, props.intervalMs);
}
function stopInterval() {
  if (intervalId !== 0) {
    clearInterval(intervalId);
  }
  intervalId = 0;
}

function resetInterval() {
  if (isPlaying.value) {
    stopInterval(); // 기존 인터벌 중지
    startInterval(); // 새로운 인터벌 시작
  }
}

function currentSlide(n: number) {
  listIndex.value = n;
  resetInterval();
  emit('update:sindex', listIndex.value as number);
}

function toggleSlideshow() {
  if (intervalId) {
    stopInterval();
  } else {
    startInterval();
  }
  isPlaying.value = !isPlaying.value;
}

const handleTouchStart = (event: TouchEvent) => {
  isDragging.value = true;
  let clientX: number | undefined;
  if (event.touches && event.touches[0]) {
    clientX = event.touches[0].clientX;
  }
  if (clientX) {
    startClientX.value = clientX;
  }
};

const handleTouchEnd = (event: TouchEvent) => {
  if (isDragging.value && event.changedTouches[0]) {
    endClientX.value = event.changedTouches ? event.changedTouches[0].clientX : 0;
    const diff = endClientX.value - startClientX.value;
    if (Math.abs(diff) >= threshold) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      resetInterval();
    }
    isDragging.value = false;
  }
};

startInterval();

onMounted(() => {
  emit('update:sindex', listIndex.value);
  watch(() => listIndex.value, (newValue) => {
    emit('update:sindex', newValue);
  });
});

</script>
<template>
  <div>
    <ul class="relative">
      <li
        v-for="(_i,j) in props.listLength"
        v-show="listIndex === j"
        :key="j"
        :class="{ 'block': listIndex === j }"
        :style="{height: `${props.height}`}"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <slot
          name="slideContents"
        />
      </li>
    </ul>
    <div class="flex justify-center mt-8">
      <span class="flex items-center justify-between w-40">
        <i
          class="text-xl"
          :class="[isPlaying ? 'xi-pause' : 'xi-play']"
          @click="toggleSlideshow()"
        />
        <span
          class="slide-dtn bg-[url(/images/icon_arrow_prev.svg)]"
          @click="prevSlide(), resetInterval()"
        />
        <span
          v-for="(_i, j) in props.listLength"
          :key="j"
          :class="['dot', { 'active': listIndex === j }]"
          @click="currentSlide(j)"
        />
        <span
          class="slide-dtn bg-[url(/images/icon_arrow_next.svg)] "
          @click="nextSlide(), resetInterval()"
        />
      </span>
    </div>
  </div>
</template>
<style scoped>
.dot {
    transition: background-color 0.6s ease;
    @apply inline-block rounded-full bg-[#C9CDD6] w-[0.6rem] h-[0.6rem] cursor-pointer;
}
.active, .dot:hover {
    @apply bg-[#050505];
}
.slide-dtn {
  @apply w-4 h-4 bg-center bg-no-repeat cursor-pointer bg-contain;
}
</style>
