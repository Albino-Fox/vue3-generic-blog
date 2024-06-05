<template>
  <v-card>
    <v-layout>
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
    </v-layout>
  </v-card>
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
