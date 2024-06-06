<template>
  <section>
    <v-divider class="pb-3"></v-divider>
    <h1>{{ extra.name }}</h1>
    <v-img
      v-if="extra.image"
      :width="750"
      :height="400"
      cover
      aspect-ratio="16/9"
      :src="`${extra.image}`"
    ></v-img>
    <p class="py-3">{{ extra.description }}</p>
  </section>
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
