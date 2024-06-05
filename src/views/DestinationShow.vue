<template>
  <div>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          v-if="destination.image"
          :src="`/images/${destination.image}`"
          alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section v-if="destination.extras" class="extras">
      <h2>Contents of {{ destination.name.toLowerCase() }}:</h2>
      <div class="cards">
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
      </div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </section>
  </div>
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
