import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: NewsView
    },
    {
      path: "/news",
      name: "news",
      component: NewsView
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
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
