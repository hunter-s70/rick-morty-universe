import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters/:id",
    name: "Character",
    component: () =>
      import(/* webpackChunkName: "character" */ "../views/CharacterPage.vue"),
  },
  {
    path: "/locations",
    name: "Locations",
    component: () =>
      import(/* webpackChunkName: "locations" */ "../views/LocationsPage.vue"),
  },
  {
    path: "/statistics",
    name: "Statistics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "statistics" */ "../views/Statistics.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(_to, _from, _savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
