<template>
  <div id="nav">
    <AppLink to="/main">GenericBlogTM</AppLink>
    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </AppLink>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="css">
#nav .vue-school-active-link {
  color: deepskyblue;
}
</style>
