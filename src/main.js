// dependencies
import Vue from "vue";
import Chartick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

// local components
import App from "./App.vue";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

// styling
import "@/assets/css/tailwind.css";


Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));

// declare filters
Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
