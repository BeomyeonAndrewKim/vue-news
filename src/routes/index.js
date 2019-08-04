import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import CreateListView from "../views/CreateListView";
import bus from "../utils/bus";
import { store } from "../store";

Vue.use(VueRouter);

const beforeEnterForListFetching = async (to, from, next) => {
  bus.$emit("start:spinner");
  await store.dispatch("FETCH_LIST", to.name);
  next();
}

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      component: CreateListView("NewsView"),
      beforeEnter: async (to,from,next) => await beforeEnterForListFetching(to, from ,next)
    },
    {
      path: "/ask",
      name: "ask",
      component: CreateListView("AskView"),
      beforeEnter: async (to,from,next) => await beforeEnterForListFetching(to, from ,next)
    },
    {
      path: "/jobs",
      name: "jobs",
      component: CreateListView("JobsView"),
      beforeEnter: async (to,from,next) => await beforeEnterForListFetching(to, from ,next)
    },
    {
      path: "/item/:itemId",
      component: ItemView
    },
    {
      path: "/user/:username",
      component: UserView
    }
  ]
});

export default router;
