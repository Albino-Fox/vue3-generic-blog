<template>
  <v-app>
    <v-layout class="d-flex flex-row justify-space-between">
      <router-view class="flex-grow-1"></router-view>
      <TheNavigation
        class="align-self-start flex-grow-0 flex-shrink-0"
        style="min-width: 20%"
      ></TheNavigation>
    </v-layout>
  </v-app>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>
