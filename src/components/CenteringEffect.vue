<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

interface CenterringListType {
  title: string,
  description: string,
  details: string,
}

const props = defineProps({
  list: {
    type: Array<CenterringListType>,
    requred: true,
    validator: (value) => {
      if (!Array.isArray(value) || value.length !== 4) {
        console.error('list props : 4가지 항목 Array');
        return false;
      }
      return true;
    },
    default() {
      return [];
    },
  },
  title: {
    type: String,
    requred: false,
    default: 'title',
  },
});

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
    :class="['2xl:flex items-center justify-center', { 'is-visible': isVisible }]"
  >
    <!-- 원 모양 요소 -->
    <div
      class="w-full h-[26.875rem]
        sm:h-[30.625rem] sm:w-[30.625rem] xl:h-[31.25rem] xl:w-[37.8125rem] mx-auto"
    >
      <div
        class="relative mx-auto -z-[1] h-full w-full sm:h-[30rem] sm:w-[30rem]"
      >
        <svg
          ref="domRef"
          :class="['circle-wrap', { 'is-visible': isVisible }]"
          width="100%"
          height="100%"
        >
          <circle
            cx="50%"
            cy="50%"
            r="49%"
            fill="none"
            stroke="#FBECEC"
            stroke-width="2"
            stroke-dasharray="3,3"
            class="rotated-circle"
          />
          <circle
            cx="50%"
            cy="50%"
            r="49%"
            fill="#D74646"
            class="scaled-circle opacity-10"
          />
          <circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="#D74646"
            class=""
          />
        </svg>

        <div
          class="font-[Poppins] font-semibold text-2xl sm:text-[2.625rem] text-white
            absolute z-10 w-full flex justify-center
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h2 class="inline">
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
    <!-- 원 모양 요소 끝 -->
    <div
      class="w-full flex flex-col gap-6 2xl:h-auto 2xl:gap-[14.6875rem] items-center
       justify-center 2xl:absolute"
    >
      <div class="w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]">
        <div
          v-for="(item, index) in props.list.slice(0,2)"
          :key="index"
          :ref="'domRef' + index"
          class="h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]"
          :class="['h0' + (index + 1) ,{'is-visible': isVisible}]"
        >
          <slot
            :item="item"
            :index="index"
          />
        </div>
      </div>
      <div class="w-full flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]">
        <div
          v-for="(item, index) in props.list.slice(2,4)"
          :key="index"
          :ref="'domRef' + index"
          class="h-box flex flex-col xl:flex-row gap-6 2xl:gap-[18.75rem] px-[0.9375rem]"
          :class="['h0' + (index + 3) ,{'is-visible': isVisible}]"
        >
          <slot
            :item="item"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.rotated-circle {
  transform-origin: center;
  animation: rotateCircle 8s linear infinite;
}

@keyframes rotateCircle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}

.scaled-circle {
  transform-origin: center;
  animation: scaleCircle 2s linear infinite;
}

@keyframes scaleCircle {
  from {
    transform: scale(0.55);
  }
  to {
    transform: scale(1);
    opacity: 1%;
  }
}

.circle-wrap {
  transition: 700ms ease-in-out;
  opacity: 0;
  transform: scale(1.2);
}

.h-box {
  box-shadow: 0rem 0rem 1.25rem rgba(173,181,199,0.4);
  @apply flex flex-col w-full p-8 sm:p-12 bg-white opacity-0;
}

.service-title {
@apply font-bold text-2xl sm:text-4xl xl:text-5xl text-[#D74646] mb-4 xl:mb-10;
}

.service-description {
@apply text-lg sm:text-xl xl:text-2xl mb-3 xl:mb-5;
}

.service-details {
@apply text-sm sm:text-base xl:text-lg text-[#A5A5A5];
}

.h01 {
  transition: 1s;
  @apply rounded-[1.5rem] xl:rounded-br-none relative
  translate-y-4 2xl:-translate-x-12 2xl:-translate-y-12;
}
.h02 {
  transition: 1s 400ms;
  @apply rounded-[1.5rem] xl:rounded-bl-none relative
  translate-y-4 2xl:translate-x-12 2xl:-translate-y-12;
}
.h03 {
  transition: 1s 600ms;
  @apply rounded-[1.5rem] xl:rounded-tr-none relative
  translate-y-4 2xl:-translate-x-12 2xl:translate-y-12;
}
.h04 {
  transition: 1s 800ms;
  @apply rounded-[1.5rem] xl:rounded-tl-none relative
  translate-y-4 2xl:translate-x-12 2xl:translate-y-12;
}
.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
