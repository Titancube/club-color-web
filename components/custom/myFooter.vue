<template>
  <div class="w-full text-xs mx-auto text-center text-gray-700 p-2">
    <p>
      Website made by
      <a
        href="https://twitter.com/Titancube"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-500"
        >Titancube</a
      >
    </p>
    <p>
      Copyright 2021 ⓒ
      <a
        href="https://twitter.com/VRC_CLUBCOLOR"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-500"
        >CLUB COLOR</a
      >
    </p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class MyFooter extends Vue {}
</script>

<style scoped lang='postcss'>
</style>