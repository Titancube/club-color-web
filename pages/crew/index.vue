<template>
  <div
    class="container min-h-screen flex flex-wrap justify-evenly items-center p-12"
  >
    <div class="p-4" data-aos="fade-left">
      <img
        class="w-64 rounded-full shadow-2xl cursor-pointer hover:w-72 transform hover:rotate-12 duration-150"
        src="../../assets/image/crew_sqr_chuyo.png"
        alt=""
      />
      <h1 class="w-full text-3xl font-bold text-center p-4">CHUYO</h1>
    </div>
    <div class="p-4" data-aos="fade-left" data-aos-delay="100">
      <img
        class="w-64 rounded-full shadow-2xl cursor-pointer hover:w-72 transform hover:rotate-12 duration-150"
        src="../../assets/image/crew_sqr_kerorong.png"
        alt=""
      />
      <h1 class="w-full text-3xl font-bold text-center p-4">KERORONG</h1>
    </div>
    <div class="p-4" data-aos="fade-left" data-aos-delay="200">
      <img
        class="w-64 rounded-full shadow-2xl cursor-pointer hover:w-72 transform hover:rotate-12 duration-150"
        src="../../assets/image/crew_sqr_entee.png"
        alt=""
      />
      <h1 class="w-full text-3xl font-bold text-center p-4">ENTEE</h1>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class index extends Vue {}
</script>

<style scoped lang='postcss'>
</style>