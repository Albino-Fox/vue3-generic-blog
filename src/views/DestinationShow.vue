<template>
  <v-list>
    <v-list-item>
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <v-img
          :width="500"
          class="rounded-lg"
          v-if="destination.image"
          :src="`${destination.image}`"
          alt="destination.name"
        ></v-img>
        <p class="py-3">{{ destination.description }}</p>
      </div>
    </v-list-item>
    <v-divider v-if="destination.extras" class="pb-3"></v-divider>
    <v-list-item v-if="destination.extras">
      <h4>Click them:</h4>
      <AppLink
        v-for="extra in destination.extras"
        :key="extra.slug"
        :to="{
          name: 'extra.show',
          params: { extraSlug: extra.slug },
        }"
      >
        <ExtraCard :extra="extra"></ExtraCard>
      </AppLink>
    </v-list-item>
    <v-list-item>
      <v-card class="pt-3">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </router-view>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script>
import sourceData from "@/data.json";
import ExtraCard from "@/components/ExtraCard.vue";

export default {
  components: { ExtraCard },
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id,
      );
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
