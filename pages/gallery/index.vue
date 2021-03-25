<template>
  <div
    class="container md:pt-24 mx-auto flex flex-wrap justify-start items-start min-h-screen py-4"
  >
    <div
      v-for="i in gallery"
      :key="i.id"
      class="w-1/2 md:w-1/4 h- ring-1 ring-black transform hover:scale-110 relative hover:z-10 hover:shadow-2xl duration-75 cursor-pointer img-container"
      @click="moveTo(i.id)"
    >
      <img
        class="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-center object-cover"
        :src="i.picture"
        alt=""
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";

interface Picture {
  id: string;
  picture: string;
}

@Component
export default class index extends Vue {
  gallery: Picture[] = [];

  mounted() {
    this.getGallery();
  }

  async getGallery() {
    const r = await this.$fire.firestore.collection("Gallery").get();

    r.forEach((v) => {
      this.gallery.push({
        id: v.id,
        picture: v.data().picture,
      });
    });
  }

  moveTo(n: number): void {
    this.$router.push("/gallery/" + n);
  }
}
</script>

<style lang='postcss'>
.img-container:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>