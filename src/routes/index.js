import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import CreateListView from "../views/CreateListView";

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
      component: CreateListView("NewsView")
    },
    {
      path: "/ask",
      name: "ask",
      component: CreateListView("AskView")
    },
    {
      path: "/jobs",
      name: "jobs",
      component: CreateListView("JobsView")
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
