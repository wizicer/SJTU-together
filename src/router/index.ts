import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/config",
    name: "Config",
    component: () =>
      import(/* webpackChunkName: "config" */ "../views/Config.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
