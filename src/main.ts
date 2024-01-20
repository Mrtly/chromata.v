import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import SchemePage from "./views/SchemePage.vue";
import RainbowPage from "./views/RainbowPage.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/scheme", component: SchemePage, name: "Scheme" },
  { path: "/rainbow", component: RainbowPage, name: "Rainbow" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
