<template>
  <div
    class="container flex flex-wrap justify-center items-start min-h-screen w-5/6 mx-auto"
  >
    <div class="w-full flex justify-center items-center">
      <img
        class="w-full h-auto"
        src="https://via.placeholder.com/500x800"
        alt=""
      />
    </div>
    <div class="w-full">
      <p>awef</p>
      <p>awef</p>
      <p>awef</p>
      <p>awef</p>
      <p>awef</p>
    </div>
    <div class="flex justify-center">
      <nuxt-link
        class="mt-4 text-2xl font-bold text-gray-300 text-center mx-auto"
        to="/events"
        >Back</nuxt-link
      >
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class id extends Vue {
  scrollToTop: true;
}
</script>

<style scoped lang='postcss'>
</style>