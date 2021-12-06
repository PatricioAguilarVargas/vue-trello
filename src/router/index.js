import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import API from '@/api'

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",

    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: { protect: true },
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
   

  },
  {
    path: "/board/:name/:id",
    name: "Board",
    props:true,
    meta: { protect: true },
    // route level code-splitting
    // this generates a separate chunk (board.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "board" */ "../views/Board.vue")
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.protect){
    //)
    debugger
    if(API.getUser()){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})

export default router;
