<template>
  <div class="card">
    <!-- <img :src="`/images/${extra.image}`" :alt="extra.name" /> -->
    <span class="card__text">
      {{ extra.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    extra: { type: Object, required: true },
  },
};
</script>
