import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppFeatures from "./components/AppFeatures.vue";
import AppDescription from "./components/AppDescription.vue";
import AppFooter from "./components/AppFooter.vue";

const routes = [
  { path: "/", name: "Home", component: AppHome },
  { path: "/features", name: "Features", component: AppFeatures },
  { path: "/description", name: "Description", component: AppDescription },
  { path: "/contact", name: "Contact", component: AppFooter },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
