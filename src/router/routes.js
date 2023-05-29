const routes = [
  // Comienza la Auth
  {
    path: "/",
    component: () => import("pages/Splash.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
  },

  // Comienza la aplicacion
  {
    path: "/app",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
