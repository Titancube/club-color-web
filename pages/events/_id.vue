<template>
  <div
    class="container flex flex-wrap justify-center md:justify-between items-start min-h-screen w-5/6 mx-auto"
    v-if="id && event"
  >
    <div class="w-full md:w-6/12 flex justify-center items-center my-8">
      <img class="w-full h-auto" :src="event.poster" alt="" />
    </div>
    <div class="w-full md:w-5/12 my-8 space-y-8">
      <div>
        <h1 class="text-3xl font-bold mb-4 bg-purple-600 text-white p-2">
          {{ event.title }}
        </h1>
        <p>{{ event.description }}</p>
      </div>
      <div>
        <p>
          <span class="font-bold text-white"
            >{{ event.startsAt }} - {{ event.endsAt }}</span
          >
        </p>
      </div>
      <div>
        <h2 class="text-xl font-bold bg-purple-600 text-white p-2">LINEUP</h2>
        <ul class="my-4">
          <li v-for="i in event.entries" :key="i">
            {{ i }}
          </li>
        </ul>
      </div>
      <div>
        <h2
          class="text-xl font-bold text-white p-2"
          :class="
            event.location === 0
              ? 'bg-purple-600'
              : event.location === 1
              ? 'bg-green-600'
              : 'bg-black'
          "
        >
          {{
            event.location === 0
              ? "CLUB COLOR"
              : event.location === 1
              ? "CLUB COLOR GREEN"
              : "CLUB COLOR Boiler style"
          }}
        </h2>
      </div>
      <div class="flex w-full justify-center my-8">
        <nuxt-link
          class="mt-4 text-2xl font-bold text-gray-300 text-center mx-auto"
          to="/events"
          >Back</nuxt-link
        >
      </div>
    </div>
  </div>
  <div v-else class="container min-h-screen flex justify-center items-center">
    <p class="w-full">No Event Found</p>
    <div class="flex w-full justify-center my-8">
      <nuxt-link
        class="mt-4 text-2xl font-bold text-gray-300 text-center mx-auto"
        to="/events"
        >Back</nuxt-link
      >
    </div>
  </div>
</template>

<script lang='ts'>
import { DocumentData } from "@google-cloud/firestore";
import { format } from "date-fns";
import { Component, Vue, Prop } from "nuxt-property-decorator";

interface Event {
  title: string;
  description: string;
  entries: Array<string>;
  startsAt: string;
  endsAt: string;
  location: number;
  poster: string;
}

@Component
export default class id extends Vue {
  id: string = this.$route.params.id;
  event: Event = {
    title: "",
    description: "",
    entries: [],
    startsAt: "",
    endsAt: "",
    location: 0,
    poster: "",
  };
  start: any;
  end: any;

  mounted() {
    this.getEvent();
  }

  async getEvent(): Promise<void> {
    const snapshot = await this.$fire.firestore
      .collection("Events")
      .doc(this.id)
      .get();

    if (this.id) {
      const r = snapshot.data();
      if (r) {
        this.event.title = r.title;
        this.event.description = r.description;
        this.event.entries = r.entries;
        this.event.startsAt = format(r.startsAt.toDate(), "yyyy-MM-dd HH:mm");
        this.event.endsAt = format(r.endsAt.toDate(), "yyyy-MM-dd HH:mm");
        this.event.location = r.location;
        this.event.poster = r.poster;
      }
    }
  }
}
</script>

<style scoped lang='postcss'>
</style>