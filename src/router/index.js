import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  }
  ,
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/*webpackChunckName: "DestinationDetails"*/ "../views/DestinationDetails.vue"),
    children: [
      {
        name: "ExperienceDetails",
        path: ":experienceSlug",
        props: true,
        component: () => import(/*webpackChunckName: "ExperienceDetails"*/ "../views/ExperienceDetails.vue")
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if(exists) {
        next()
      }else{
        next({name: "NotFound"})
      }
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component:() => import(/*webpackChunckName: "dashboard" */ "../views/Dashboard.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/login",
    name: "Login",
    component:() => import(/*webpackChunckName: "login" */ "../views/Login.vue")
  },
  {
    path: "/invoices",
    name: "invoices",
    component:() => import(/*webpackChunckName: "invoices" */ "../views/Invoices.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "NotFound",
    path: "/404",
    alias: "*",
    component: () => import(/*WebpackChunckName: "NotFound" */ "../views/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "test-active-class",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if(to.hash === "#experience"){
          position.offset = {y:140};
        }
        if(document.querySelector(to.hash)){
          return position;
        }
        return false
      }
    }
  }
  ,
  routes
});

router.beforeEach((to, from, next)=> {
  // if(to.meta.requiresAuth){
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.user){
      next({
        name: "Login",
        query: {redirect: to.fullPath}
      });
    }else {
      next();
    }
  } else {
    next();
  }
})
export default router;
