<template>
  <!-- <img :src="`/images/${extra.image}`" :alt="extra.name" /> -->
  <span class="card__text">
    {{ extra.name }}
  </span>
</template>

<script>
export default {
  props: {
    extra: { type: Object, required: true },
  },
};
</script>
