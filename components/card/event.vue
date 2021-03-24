<template>
  <div
    class="relative w-5/6 md:w-1/5 mt-4 md:m-4 cursor-pointer ring-1 ring-black"
  >
    <img
      class="relative z-10 w-full max-h-80 object-cover"
      src="https://via.placeholder.com/300x400"
      alt=""
    />
    <div class="absolute z-20 top-0 w-full h-full">
      <p
        class="absolute z-20 w-full bottom-0 bg-black bg-opacity-30 p-2 text-xl font-bold"
      >
        TEST EVENT
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class event extends Vue {}
</script>

<style scoped lang='postcss'>
</style>