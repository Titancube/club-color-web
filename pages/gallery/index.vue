<template>
  <div
    class="container md:pt-24 mx-auto flex flex-wrap justify-start items-start min-h-screen py-4"
  >
    <div
      v-for="i in (items = 200)"
      :key="i"
      class="w-1/2 md:w-1/6 h-auto ring-1 ring-black transform hover:scale-110 relative hover:z-10 hover:shadow-2xl duration-75 cursor-pointer"
      @click="moveTo(i)"
    >
      <img
        class="w-full h-auto object-cover"
        src="https://via.placeholder.com/300"
        alt=""
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class index extends Vue {
  moveTo(n: number): void {
    this.$router.push("/gallery/" + n);
  }
}
</script>

<style scoped lang='postcss'>
</style>