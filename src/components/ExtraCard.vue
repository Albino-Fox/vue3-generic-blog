<template>
  {{ extra.name }}
</template>

<script>
export default {
  props: {
    extra: { type: Object, required: true },
  },
};
</script>
