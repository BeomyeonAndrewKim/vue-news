import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import CreateListView from "../views/CreateListView";
import bus from "../utils/bus";
import { store } from "../store";

Vue.use(VueRouter);

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
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name).then(() => next());
      }
    },
    {
      path: "/ask",
      name: "ask",
      component: CreateListView("AskView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name).then(() => next());
      }
    },
    {
      path: "/jobs",
      name: "jobs",
      component: CreateListView("JobsView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name).then(() => next());
      }
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
