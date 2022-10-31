import { createWebHistory, createRouter } from "vue-router";
import Login from "@/pages/Login.vue";
const Profile = () => import("@/pages/Profile.vue")

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;