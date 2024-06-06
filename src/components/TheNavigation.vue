<template>
  <!-- <v-navigation-drawer -->
  <!--   flat -->
  <!--   absolute="true" -->
  <!--   fixed -->
  <!--   width="250" -->
  <!--   location="right" -->
  <!--   permanent -->
  <!-- > -->
  <v-list density="compact" nav>
    <v-list-item>
      <AppLink to="/main"><h3 class="logo">GenericBlog&trade;</h3></AppLink>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
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
    </v-list-item>
  </v-list>
  <!-- </v-navigation-drawer> -->
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
