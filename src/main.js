import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./static/css/style.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  style,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
