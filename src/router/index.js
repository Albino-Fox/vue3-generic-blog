import { createRouter, createWebHistory } from "vue-router";
import sourceData from "@/data.json";

function getSlugPageById(slug) {
  return sourceData.destinations.find(
    (destination) => destination.slug === slug,
  );
}

const routes = [
  {
    path: "/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({
      id: getSlugPageById(route.params.slug).id,
    }),
    beforeEnter(to) {
      const exists = sourceData.destinations.find(
        (destination) => destination.slug === to.params.slug,
      );
      if (!exists)
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ":extraSlug",
        name: "extra.show",
        component: () => import("@/views/ExtraShow.vue"),
        props: (route) => ({
          ...route.params,
          id: getSlugPageById(route.params.slug).id,
        }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "color: red",
  scrollBehavior(to, from, savedPosition) {
    if (to.params.slug !== from.params.slug) {
      return (
        savedPosition ||
        new Promise((resolve) => {
          setTimeout(() => resolve({ top: 0 }));
        })
      );
    }
  },
});

// router.beforeEach((to) => {
// });

export default router;
