<template>
  <v-app>
    <TheNavigation></TheNavigation>
    <router-view></router-view>
  </v-app>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>
