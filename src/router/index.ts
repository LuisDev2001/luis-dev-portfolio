import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about-me",
    name: "About",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/resume-me",
    name: "Resume",
    component: () =>
      import("../views/ResumeView.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import("../views/PortfolioView.vue"),
  },
  {
    path: "/contact-me",
    name: "Contact",
    component: () =>
      import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
