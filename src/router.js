import Vue from "vue";
import Router from "vue-router";
import blog from "./views/blog.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "blog",
      component: {
        blog
      }
    }
  ]
});
