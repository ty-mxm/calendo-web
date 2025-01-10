import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppFeatures from "./components/AppFeatures.vue";
import AppDescription from "./components/AppDescription.vue";
import AppFooter from "./components/AppFooter.vue";
import AppCookies from "./components/AppCookies.vue";
import AppConditions from "./components/AppConditions.vue";
import AppConfidential from "./components/AppConfidential.vue";
import AppMention from "./components/AppMention.vue";

const routes = [
  { path: "/", name: "Home", component: AppHome },
  { path: "/features", name: "Features", component: AppFeatures },
  { path: "/description", name: "Description", component: AppDescription },
  { path: "/contact", name: "Contact", component: AppFooter },
  { path: "/cookies", name: "Cookies", component: AppCookies },
  { path: "/terms", name: "terms", component: AppConditions },
  { path: "/privacy", name: "Confidential", component: AppConfidential },
  { path: "/mentions", name: "Mention", component: AppMention },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
