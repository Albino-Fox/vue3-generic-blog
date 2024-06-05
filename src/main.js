import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import AppLink from "@/components/AppLink.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .component("AppLink", AppLink)
  .use(router)
  .use(vuetify)
  .mount("#app");
