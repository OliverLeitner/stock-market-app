import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // make this.$store accessible from everywhere

Vue.config.productionTip = false;

new Vue({
  store, // add store to your app "space"
  router,
  render: (h) => h(App),
}).$mount("#app");
