<template>
  <div
    class="w-full z-30 sticky top-0 bg-gradient-to-b from-purple-900 via-purple-900 to-transparent md:bg-transparent md:fixed"
  >
    <ul class="list-none w-full flex h-full justify-center items-center p-4">
      <li
        v-for="menu in menus"
        :key="menu.title"
        class="md:text-2xl font-bold py-4 rounded-md duration-150 transform -rotate-12"
        :class="{ 'rotate-0': menu.url == $route.fullPath }"
      >
        <nuxt-link class="px-2 -m-1 rounded-full duration-150" :to="menu.url">{{
          menu.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";

interface Menu {
  title: string;
  url: string;
}

@Component
export default class index extends Vue {
  menus: Menu[] = [
    { title: "HOME", url: "/" },
    { title: "GALLERY", url: "/gallery" },
    { title: "CREW", url: "/crew" },
    { title: "EVENTS", url: "/events" },
  ];
}
</script>

<style scoped lang='postcss'>
.nuxt-link-exact-active {
  @apply bg-white text-purple-700 p-2 mx-4;
}
</style>