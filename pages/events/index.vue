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
    <div v-if="!eventsToday"></div>
    <CardEvent
      v-else
      v-for="et in eventsToday"
      :key="et.id"
      :title="et.title"
      :location="et.location"
      :poster="et.poster"
      :startsAt="et.startsAt"
      @click.native="moveTo(et.id)"
    />

    <h1 class="w-full text-center md:text-left text-3xl font-bold mt-12 my-4">
      Upcoming Events
    </h1>
    <div v-if="!eventsUpcoming"></div>
    <CardEvent
      class="mb-4"
      v-else
      v-for="eu in eventsUpcoming"
      :key="eu.id"
      :title="eu.title"
      :location="eu.location"
      :poster="eu.poster"
      :startsAt="eu.startsAt"
      @click.native="moveTo(eu.id)"
    />

    <h1 class="w-full text-center md:text-left text-3xl font-bold mt-12 my-4">
      Archives
    </h1>
    <div v-if="!eventsPast"></div>
    <CardEvent
      class="mb-4"
      v-else
      v-for="ep in eventsPast"
      :key="ep.id"
      :title="ep.title"
      :location="ep.location"
      :poster="ep.poster"
      :startsAt="ep.startsAt"
      @click.native="moveTo(ep.id)"
    />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { ko } from "date-fns/locale";

interface Event {
  id: string;
  title: string;
  startsAt: Date;
  endsAt: Date;
  location: number;
  poster: string;
}

@Component
export default class index extends Vue {
  clubRedirection: string =
    "https://vrchat.com/home/launch?worldId=wrld_48cffdef-b2ec-42b2-9098-769fadca3cfa";
  currentWorld: string = "CLUB COLOR";
  events: Event[] = [];
  eventsToday: Event[] = [];
  eventsUpcoming: Event[] = [];
  eventsPast: Event[] = [];

  mounted() {
    this.getEvents();
  }

  whichClubToGo(n: number): void {
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
  async getEvents(): Promise<void> {
    const snapshot = await this.$fire.firestore.collection("Events").get();

    snapshot.forEach((v) => {
      this.events.push({
        id: v.id,
        title: v.data().title,
        startsAt: v.data().startsAt.toDate(),
        endsAt: v.data().endsAt.toDate(),
        location: v.data().location,
        poster: v.data().poster,
      });
    });

    this.sortEvents();
  }

  sortEvents(): void {
    const eventsUpcoming = this.events.filter(
      (v) =>
        parseInt(
          formatDistanceToNowStrict(v.startsAt, {
            addSuffix: false,
            unit: "second",
            locale: ko,
          })
        ) > 86400 && v.endsAt > new Date()
    );
    this.eventsUpcoming = eventsUpcoming;

    const eventsPast = this.events.filter((v) => v.endsAt < new Date());
    this.eventsPast = eventsPast;

    const eventsToday = this.events.filter(
      (v) =>
        parseInt(
          formatDistanceToNowStrict(v.startsAt, {
            addSuffix: false,
            unit: "second",
            locale: ko,
          })
        ) < 86400 && v.endsAt > new Date()
    );
    this.eventsToday = eventsToday;
    if (this.eventsToday.length > 0) {
      this.whichClubToGo(this.eventsToday[0].location);
    }
  }

  moveTo(n: number): void {
    this.$router.push("/events/" + n);
  }
}
</script>