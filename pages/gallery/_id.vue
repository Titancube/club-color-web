<template>
  <div
    class="container mx-auto flex flex-wrap justify-center items-center min-h-screen"
  >
    <div class="w-full flex justify-center items-center pt-0 md:pt-20">
      <img :src="content.picture" alt="" />
    </div>
    <div class="w-full flex justify-center items-center pt-0 md:py-20">
      <p class="text-xl">{{ content.description }}</p>
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
import { Component, Vue } from "nuxt-property-decorator";

interface Picture {
  id: string;
  description: string;
  picture: string;
}

@Component
export default class id extends Vue {
  id: string = this.$route.params.id;
  content: Picture = {
    id: "",
    description: "",
    picture: "",
  };

  mounted() {
    this.getPicture();
  }

  async getPicture() {
    const r = await this.$fire.firestore
      .collection("Gallery")
      .doc(this.id)
      .get();
    if (this.id && r.exists) {
      const snapshot = r.data();
      if (snapshot) {
        this.content = {
          id: this.id,
          description: snapshot.description,
          picture: snapshot.picture,
        };
      }
    }
  }
}
</script>

<style scoped lang='postcss'>
</style>