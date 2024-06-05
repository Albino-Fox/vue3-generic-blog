import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import sourceData from "@/data.json";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/protected",
    name: "protected",
    component: () => import("@/views/ProtectedView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
    beforeEnter: (from) => {
      if (window.user) {
        console.log("authorized!");
        return { name: from };
      }
    },
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({
      // ...route.params,
      id: parseInt(route.params.id),
    }),
    beforeEnter(to) {
      const exists = sourceData.destinations.find(
        (destination) =>
          destination.id === parseInt(to.params.id) &&
          destination.slug === to.params.slug,
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
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({
          ...route.params,
          id: parseInt(route.params.id),
        }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("@/views/InvoicesView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "vue-school-active-link",
  scrollBehavior(to, from, savedPosition) {
    if (to.params.id !== from.params.id) {
      return (
        savedPosition ||
        new Promise((resolve) => {
          setTimeout(() => resolve({ top: 0 }));
        })
      );
    }
  },
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
