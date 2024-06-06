<template>
  <v-layout>
    <section>
      <h1>{{ extra.name }}</h1>
      <v-img
        v-if="extra.image"
        :src="`/images/${extra.image}`"
        :alt="extra.name"
      ></v-img>
      <p class="py-3">{{ extra.description }}</p>
    </section>
  </v-layout>
</template>

<script>
import sourceData from "@/data.json";
export default {
  props: {
    id: { type: Number, required: true },
    extraSlug: { type: String, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id,
      );
    },
    extra() {
      return this.destination.extras.find(
        (extra) => extra.slug === this.extraSlug,
      );
    },
  },
};
</script>
