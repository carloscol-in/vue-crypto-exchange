// dependencies
import Vue from "vue";

// local components
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
