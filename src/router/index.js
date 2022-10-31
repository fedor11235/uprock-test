import { createWebHistory, createRouter } from "vue-router";
import PageLogin from "@/pages/PageLogin.vue";
const PageProfile = () => import("@/pages/PageProfile.vue")

const routes = [
  {
    path: "/login",
    component: PageLogin,
  },
  {
    path: "/profile",
    name: "profile",
    component: PageProfile,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;