import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

// had to add this after the "vue add vuetify" command because the CSS styles are not loaded without it
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
