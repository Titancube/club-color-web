<template>
  <div
    class="container mx-auto flex flex-wrap justify-center items-center min-h-screen"
  >
    <div class="w-full flex justify-center items-center pt-0 md:pt-20">
      <img :src="url" alt="" />
    </div>
    <div class="flex justify-center">
      <nuxt-link
        class="mt-4 text-2xl font-bold text-gray-300 text-center mx-auto"
        to="/gallery"
        >Back</nuxt-link
      >
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class id extends Vue {
  url: string = "http://via.placeholder.com/600";
}
</script>

<style scoped lang='postcss'>
</style>