<script lang="ts" setup>
import { ref } from 'vue';

interface SlideListType {
  key: string | number | symbol;
  contents: Array<string>;

}

const props = defineProps({
  list: {
    type: Array<SlideListType>,
    default() {
      return [];
    },
  },
});

const slideIndex = ref(0);
const slideTranslate = ref(100);

function nextSlide() {
  if (slideIndex.value < props.list.length - 1) {
    slideIndex.value = (slideIndex.value + 1) % props.list.length;
    slideTranslate.value -= 100;
  }
}

function prevSlide() {
  if (slideIndex.value > 0) {
    slideIndex.value = (slideIndex.value - 1 + props.list.length) % props.list.length;
    slideTranslate.value += 100;
  }
}

function isActive(index: number) {
  return index === slideIndex.value;
}

function handleSlideClick(index: number) {
  if (index < slideIndex.value) {
    prevSlide();
  } else if (index > slideIndex.value) {
    nextSlide();
  }
}

function handleSlideInput() {
  slideTranslate.value = -100 * (slideIndex.value - 1);
}

</script>
<template>
  <article>
    <div class="relative flex flex-col items-start max-w-full lg:flex-row">
      <div
        class="relative flex flex-row items-center overflow-hidden
    slider-container lg:flex-col lg:items-end lg:basis-1/2 lg:pr-28 2xl:pr-48"
      >
        <button
          class="hidden mb-8 mr-24 slide-button lg:block"
          :disabled="slideIndex === 0"
          @click="prevSlide"
        >
          <i class="xi-arrow-up" />
        </button>
        <div class="h-[300px] overflow-hidden hidden lg:block">
          <div
            class="justify-between hidden h-full overflow-hidden slider lg:flex lg:flex-col"
          >
            <div
              v-for="(item, index) in props.list"
              :key="item.key"
              class="slide"
              :class="{ active: isActive(index) }"
              :style="{ transform: `translateY(${slideTranslate}%)` }"
              @click="handleSlideClick(index)"
            >
              <div class="text-center select-none year">
                {{ item.key }}
              </div>
            </div>
          </div>
        </div>
        <button
          class="hidden mt-8 mb-12 mr-24 slide-button lg:block"
          :disabled="slideIndex === props.list.length - 1"
          @click="nextSlide"
        >
          <i class="xi-arrow-down" />
        </button>
      </div>
      <!-- 992px 이하 슬라이드 핸들러-->
      <div class="w-full overflow-hidden lg:hidden">
        <!--eslint-disable-next-line max-len-->
        <div
          class="flex justify-between w-full overflow-hidden slider slider-small lg:hidden"
        >
          <div
            v-for="(item, index) in props.list"
            :key="item.key"
            class="slide"
            :class="{ active: isActive(index) }"
            :style="{ transform: `translateX(${slideTranslate}%)` }"
            @click="handleSlideClick(index)"
          >
            <div class="year">
              {{ item.key }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full mt-4 lg:hidden">
        <button
          class="slide-button"
          :disabled="slideIndex === 0"
          @click="prevSlide"
        >
          <i class="xi-arrow-left" />
        </button>
        <button
          class="slide-button"
          :disabled="slideIndex === props.list.length - 1"
          @click="nextSlide"
        >
          <i class="xi-arrow-right" />
        </button>
      </div>

      <!-- 슬라이드-->
      <!-- eslint-disable max-len -->
      <div
        class="relative flex w-full mt-8 content-container lg:basis-1/2 lg:pl-28 2xl:pl-48 sm:mt-12"
      >
        <input
          id="range"
          v-model.number="slideIndex"
          class="range-slider absolute hidden lg:block cursor-pointer
            rotate-90 -left-60 top-[11.313rem] w-[29.625rem]"
          type="range"
          min="0"
          :max="props.list.length - 1"
          @input="handleSlideInput"
        >
        <ul
          class="w-full content"
          :class="{ active: slideIndex >= 0 }"
        >
          <li
            v-for="i in props.list[slideIndex]!.contents"
            :key="i"
            class="w-full mb-6 text-lg font-semibold sm:mb-11 text-left"
          >
            {{ i }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
<style scoped>
.slider-container {
  justify-content: center;
  position: relative;
  @apply mx-auto;
}
.slider {
  transition: transform 0.7s ease-in-out;
}
.slider-small {
  width: calc(100vw - 3.75rem)
}
.slide {
  flex: 0 0 calc(100% / 3);
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #EEEEEE;
  font-family: Poppins;
  line-height: 1;
  font-weight: bold;
  transition: transform 700ms ease-out;
  @apply text-[2rem] sm:text-5xl md:text-6xl lg:text-[5.875rem] lg:h-[6.25rem] w-[3.75rem] sm:w-full;
}
.slide.active {
  color: #A9141A;
}
.year {
  transition: transform 0.7s ease-in-out;
  @apply text-center select-none  transition-all duration-700 ease-in-out;
}
.slide-button {
  border: 0.125rem solid #DDDDDD;
  color: #DDDDDD;
  cursor: pointer;
  @apply w-10 h-10 rounded-full;
}
.slide-button:hover {
  color: #A9141A;
  border-color: #A9141A;
}
.slide-button:disabled {
  @apply pointer-events-none;
}
.content {
  @apply list-none p-0 min-h-[27.5rem];
}
.content li {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.content.active li {
  counter-increment: list-number;
  opacity: 1;
  width: 100%;
}
.content.active li::before {
  content: counter(list-number, decimal-leading-zero);
  line-height: 1.5;
  color: #A9141A;
  @apply w-7 h-7 text-xl text-center font-bold inline-block mr-5;
}
.range-slider {
  -webkit-appearance: none;
}
input[type=range]::-webkit-slider-thumb {
  border: 0.375rem solid #EED0D1;
  -webkit-appearance: none;
  @apply w-[1.375rem] h-[1.375rem] rounded-full cursor-pointer bg-[#A9141A] -mt-2;
}
input[type=range]::-webkit-slider-runnable-track {
  @apply w-1/2 h-[0.313rem] cursor-pointer rounded-sm bg-[#EEEEEE];
}
</style>
