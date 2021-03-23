<template>
  <div
    class="container min-h-screen flex flex-wrap justify-evenly items-center p-12 mx-auto"
  >
    <div
      v-for="crew in crews"
      :key="crew.id"
      class="p-4"
      data-aos="fade-left"
      :data-aos-delay="crew.delay"
      @click="moveTo(crew.id)"
    >
      <img
        class="w-64 rounded-full shadow-2xl cursor-pointer hover:w-72 transform hover:rotate-12 duration-150"
        :src="crew.imageUrl"
        alt=""
      />
      <h1 class="w-full text-3xl font-bold text-center p-4">{{ crew.name }}</h1>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";

interface Crew {
  id: number;
  name: string;
  imageUrl: string;
  delay: number;
}

@Component
export default class index extends Vue {
  crews: Crew[] = [
    {
      id: 0,
      name: "CHUYO",
      imageUrl: "/description/crew_sqr_chuyo.png",
      delay: 0,
    },
    {
      id: 1,
      name: "KERORONG",
      imageUrl: "/description/crew_sqr_kerorong.png",
      delay: 100,
    },
    {
      id: 2,
      name: "ENTEE",
      imageUrl: "/description/crew_sqr_entee.png",
      delay: 200,
    },
  ];

  moveTo(n: number): void {
    this.$router.push("/crew/" + n);
  }
}
</script>