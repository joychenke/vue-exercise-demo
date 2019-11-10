import Vue from "vue";
import Router from "vue-router";
import Empty from "./views/Empty.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/About.vue")
    },
    {
      path: "/slot",
      name: "slotComponent",
      component: () =>
        import("./views/slot/SlotComponent.vue")
    },{
      path: "/iterator",
      name: "iterator",
      component: () => import("./views/iterator/Iterator.vue")
    },{
      path: "/generator",
      name: "generator",
      component: () => import("./views/Generator/Generator.vue")
    },{
      path: "/eventemitter",
      name: "eventemitter",
      component: () => import("./views/eventemitter/Eventemitter.vue")
    },
    {
      path: "/vuepart",
      name: "vuepart",
      component: () => import("./views/Vue/index.vue")
    },
    {
      path: "*",
      name: "empty",
      component: Empty
    }
  ]
});

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

