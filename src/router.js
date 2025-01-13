import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppFeatures from "./components/AppFeatures.vue";

import AppFooter from "./components/AppFooter.vue";

import AppPrivacy from "./components/AppPrivacy.vue";

const routes = [
  { path: "/", name: "Home", component: AppHome },
  { path: "/features", name: "Features", component: AppFeatures },
  
  { path: "/contact", name: "Contact", component: AppFooter },

  { path: "/privacy", name: "Privacy", component: AppPrivacy },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
