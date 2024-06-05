<template>
  <v-card>
    <!-- <img :src="`/images/${extra.image}`" :alt="extra.name" /> -->
    <span class="card__text">
      {{ extra.name }}
    </span>
  </v-card>
</template>

<script>
export default {
  props: {
    extra: { type: Object, required: true },
  },
};
</script>
