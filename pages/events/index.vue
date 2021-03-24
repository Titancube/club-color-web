<template>
  <div
    class="container mx-auto w-5/6 md:w-full flex flex-wrap justify-center md:justify-start items-start min-h-screen md:px-12 py-4"
  >
    <div
      class="w-full flex md:flex-nowrap flex-wrap justify-center md:justify-between mt-12 my-4"
    >
      <h1 class="text-3xl flex md:flex-nowrap flex-wrap font-bold">
        Today's Events
      </h1>
      <div
        class="flex md:flex-nowrap flex-wrap justify-center items-center my-4 md:my-0"
      >
        <p class="text-gray-500 mr-4 w-full md:w-auto text-center md:text-left">
          Current world
        </p>
        <p class="w-full md:w-auto text-center md:text-left">
          {{ currentWorld }}
        </p>
      </div>
      <a :href="clubRedirection" target="_blank" rel="noopener noreferrer">
        <button
          class="relative text-lg font-bold flex justify-center items-center bg-yellow-500 rounded-full py-2 px-4 text-white outline-none focus:outline-none"
        >
          LAUNCH WORLD
        </button></a
      >
    </div>
    <CardEvent v-for="i in (items = 2)" :key="i" @click.native="moveTo(i)" />
    <h1 class="w-full text-center md:text-left text-3xl font-bold mt-12 my-4">
      Upcoming Events
    </h1>
    <CardEvent v-for="j in (items = 6)" :key="j" @click.native="moveTo(j)" />
    <h1 class="w-full text-center md:text-left text-3xl font-bold mt-12 my-4">
      Archives
    </h1>
    <CardEvent v-for="k in (items = 15)" :key="k" @click.native="moveTo(k)" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";

interface Event {
  title: string;
  description: string;
  entries: Array<string>;
  startsAt: Date;
  endsAt: Date;
  location: number;
}

@Component
export default class index extends Vue {
  clubRedirection: string =
    "https://vrchat.com/home/launch?worldId=wrld_48cffdef-b2ec-42b2-9098-769fadca3cfa";
  currentWorld: string = "CLUB COLOR";
  events: Event[] = [];

  mounted() {
    this.getTodayEvents();
  }

  whichClubToGo(n: number) {
    switch (n) {
      default:
      case 0:
        // Club color
        this.currentWorld = "CLUB COLOR";
        this.clubRedirection =
          "https://vrchat.com/home/launch?worldId=wrld_48cffdef-b2ec-42b2-9098-769fadca3cfa";
        break;
      case 1:
        // Club color: Green
        this.currentWorld = "CLUB COLOR GREEN";
        this.clubRedirection = "";
        break;
      case 2:
        // Club color: Boiler style
        this.currentWorld = "CLUB COLOR BOILER STYLE";
        this.clubRedirection =
          "https://vrchat.com/home/launch?worldId=wrld_d7202332-47bf-428b-a665-af6603e27ae3";
        break;
    }
  }

  // Get all events from DB
  async getTodayEvents() {
    const snapshot = await this.$fire.firestore.collection("Events").get();
    snapshot.forEach((v) => {
      this.events.push({
        title: v.data().title,
        description: v.data().description,
        entries: v.data().entries,
        startsAt: v.data().startsAt,
        endsAt: v.data().endsAt,
        location: v.data().location,
      });
    });
  }

  moveTo(n: number): void {
    this.$router.push("/events/" + n);
  }

  get() {
    //
  }
}
</script>

<style scoped lang='postcss'>
</style>