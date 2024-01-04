<script lang="ts" setup>

interface ListListType {
  contents: string;
}

const props = defineProps({
  list: {
    type: Array<ListListType>,
    default() {
      return [];
    },
  },
});

</script>
<template>
  <div>
    <ul class="focus-area">
      <li
        v-for="(i,j) in props.list"
        :key="j"
      >
        <p class="max-w-[76%]">
          {{ i.contents }}
        </p>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.focus-area {
  @apply grid gap-3 2xl:grid-cols-2 sm:gap-6;
}
.focus-area li {
  counter-increment: list-number;
  @apply bg-[#F8F2F3] rounded-full text-xs sm:text-2xl
  px-3 sm:px-5 py-2 sm:py-4 flex tracking-tight sm:tracking-normal items-center;
}
.focus-area li::before {
  border: 0.063rem solid #D9DADD;
  background: white;
  border-radius: 100%;
  justify-content: center;
  content: counter(list-number, decimal-leading-zero);
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: #A9141A;
  @apply text-xs sm:text-2xl w-[2.625rem] h-[2.625rem] sm:w-[5.875rem] sm:h-[5.875rem] mr-5;
}
</style>
