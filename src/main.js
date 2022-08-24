import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "./filters"; // Global filters
import "./directives"; // Global directives

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
