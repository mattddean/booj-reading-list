import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

// had to add this after the "vue add vuetify" command because the CSS styles are not loaded without it
import "vuetify/dist/vuetify.min.css";

import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount("#app");
