<template>
  <div
    class="container w-5/6 md:w-full h-screen justify-center items-center mx-auto"
  >
    <div class="w-full flex flex-wrap justify-center items-center">
      <img class="rounded-3xl my-4" :src="url" alt="" data-aos="fade-left" />
      <div
        class="w-full flex justify-center"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div>
          <p>
            <span class="desc-title">DJ NAME</span>: {{ details[crew].name }}
          </p>
          <p>
            <span class="desc-title">VRChat</span>: {{ details[crew].vrName }}
          </p>
          <p>
            <span class="desc-title">Equipment</span>:
            {{ details[crew].equipment }}
          </p>
          <p>
            <span class="desc-title">Main Genre</span>:
            {{ details[crew].genre }}
          </p>
          <p>
            <span class="desc-title">Organized Event</span>:
            {{ details[crew].event !== "" ? details[crew].event : "NONE" }}
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <nuxt-link
          class="mt-4 text-2xl font-bold text-gray-300 text-center mx-auto"
          to="/crew"
          >Back</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";

interface Detail {
  name: string;
  vrName: string;
  equipment: string;
  genre: string;
  event: string;
}

@Component
export default class id extends Vue {
  details: Detail[] = [
    {
      name: "CHUYO",
      vrName: "CHUYO_",
      equipment:
        'XDJ-XZ, ATH-M50x, MBP 2020 13", DM-40, Focusrite Scarlett 4i4',
      genre: "House, Jersey Club, Future Bass, Hiphop",
      event: "CLUB COLOR Vol. & EP",
    },
    {
      name: "Kerorong",
      vrName: "Kerorong66",
      equipment: "DDJ-800, HDJ-CUE 1, Focusrite Scarlett 2i2",
      genre: "Hardcore, Future Jersey, Future House",
      event: "ONLYMIX FESTA",
    },
    {
      name: "Entee",
      vrName: "Entee",
      equipment:
        'XDJ-RX2, ATH-M50x, MBP 2020 13", DM-40, Focusrite Scarlett 4i4',
      genre: "Hi-Tech, Future Funk, Gabber",
      event: "",
    },
  ];
  crew: string = this.$route.params.id;
  url: string = "";

  mounted() {
    this.getImage();
  }

  getImage() {
    const path = "/description/";
    switch (this.crew) {
      default:
      case "0":
        this.url = path + "crew_sqr_chuyo.png";
        break;
      case "1":
        this.url = path + "crew_sqr_kerorong.png";
        break;
      case "2":
        this.url = path + "crew_sqr_entee.png";
        break;
    }
  }
}
</script>

<style scoped lang='postcss'>
.desc-title {
  @apply font-bold text-gray-600;
}
</style>