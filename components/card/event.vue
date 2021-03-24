<template>
  <div
    class="relative w-5/6 md:w-1/5 mt-4 md:m-4 cursor-pointer ring-8"
    :class="
      location === 0
        ? 'ring-purple-500'
        : location === 1
        ? 'ring-green-500'
        : 'ring-black'
    "
  >
    <img
      class="relative z-10 w-full max-h-80 object-cover"
      :src="poster"
      alt=""
    />
    <div class="absolute z-20 top-0 w-full h-full">
      <p
        class="absolute z-20 w-full bottom-0 bg-black bg-opacity-50 p-2 text-xl font-bold"
      >
        {{ title }}
      </p>
      <p class="absolute z-20 w-full top-0 bg-black bg-opacity-50 p-2 text-sm">
        {{ formattedDate }}
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import format from "date-fns/format";
import { ko } from "date-fns/locale";
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class event extends Vue {
  @Prop(String) title: string;
  @Prop(Number) location: number;
  @Prop(String) poster: string;
  @Prop(Date) startsAt: Date;

  get formattedDate(): string {
    return format(this.startsAt, "yyyy-MM-dd HH:mm:ss", { locale: ko });
  }
}
</script>

<style scoped lang='postcss'>
</style>