<template>
  <div
    class="container mx-auto w-5/6 md:w-full flex flex-wrap justify-center items-start min-h-screen py-4"
  >
    <div
      class="relative w-5/6 md:w-1/5 mt-4 md:m-4 cursor-pointer"
      v-for="i in (items = 15)"
      :key="i"
      @click="moveTo(i)"
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
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class index extends Vue {
  moveTo(n: number): void {
    this.$router.push("/events/" + n);
  }
}
</script>

<style scoped lang='postcss'>
</style>