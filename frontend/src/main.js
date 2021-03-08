import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { GC_USER_ID, FULL_NAME } from "./constants/settings";

// had to add this after the "vue add vuetify" command because the CSS styles are not loaded without it
import "vuetify/dist/vuetify.min.css";

import router from "./router";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

let userId = localStorage.getItem(GC_USER_ID);
let fullName = localStorage.getItem(FULL_NAME);

new Vue({
  vuetify,
  router,
  data: {
    userId,
    fullName,
  },
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
