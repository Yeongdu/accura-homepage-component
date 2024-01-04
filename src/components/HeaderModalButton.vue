<script lang="ts" setup>
import { ref } from 'vue';

const isNavModalOpen = ref(false);
const largeScale = ref(false);
const elementScale = ref(1);
const isHovering = ref(false);

const closeModal = () => {
  isNavModalOpen.value = false;
  largeScale.value = false;
  setTimeout(() => {
    elementScale.value = 1;
  }, 700);
  document.body.style.overflow = 'auto';
};

const toggleModal = () => {
  if (isNavModalOpen.value === true) {
    isNavModalOpen.value = false;
    document.body.style.overflow = 'auto';
  } else {
    largeScale.value = true;
    elementScale.value = 5;
    setTimeout(() => {
      isNavModalOpen.value = true;
    }, 700);
    document.body.style.overflow = 'hidden';
  }
};

const handleMouseOver = () => {
  if (elementScale.value === 1) {
    isHovering.value = true;
  }
};

const handleMouseOut = () => {
  isHovering.value = false;
};
</script>
<template>
  <!-- 모달 메뉴 열기 버튼 -->
  <div class="flex items-center">
    <i
      :class="[isHovering&&elementScale==1 ?
                 'hover:text-white hover:bg-[#A9141A] hover:rotate-90 ' : '',
               largeScale? 'scale-[70]':'scale-100',
               elementScale!=1?'bg-[#A9141A] border-none':'xi-drag-vertical'
      ]"
      class="z-[2222] w-[4.5rem] h-[4.5rem]
          transition-transform duration-500 delay-0 hamburger-nav-button
          cursor-pointer text-3xl lg:text-5xl"
      @click="toggleModal"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
    />
  </div>
  <!-- 모달 메뉴 열기 버튼 끝 -->

  <!-- 모달 안쪽 시작-->
  <div
    class="hamburger-nav-inside"
    :class="[isNavModalOpen? 'visible opacity-100' : 'invisible opacity-0']"
  >
    <div class="flex items-center justify-between mb-10 large-container-custom mt-14">
      <div />
      <button @click="closeModal">
        <i
          class="xi-close text-4xl text-white bg-[#981E23] w-24 h-24 rounded-full cursor-pointer
          hover:rotate-90 flex items-center justify-center
          transition-transform duration-500 delay-0"
          @click="closeModal"
        />
      </button>
    </div>
    <slot name="inside-modal" />
  </div>
<!-- 모달 안쪽 끝-->
</template>
<style scoped>
.hamburger-nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.063rem solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  text-align: center;
}
.hamburger-nav-inside {
  overflow-y: auto;
  opacity: 1;
  background-color: #A9141A;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 9999;
}
</style>
