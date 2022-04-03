import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Home.vue";
import Motivation from "@/components/motivation/Motivation.vue";
import About from "@/components/about/About.vue";
import Information from "@/components/information/Information.vue";
import Details from "@/components/details/Details.vue";

Vue.use(Router);

export const routes = [
  {
    path: "",
    name: "home",
    component: Home
  },
  {
    path: "/motivation",
    name: "motivation",
    component: Motivation
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/information/:name",
    name: "information",
    component: Information
  },
  {
    path: "/information/:name??page=:page",
    name: "next-page",
    component: Information
  },
  {
    path: "/information/:name/:id",
    name: "details",
    component: Details
  }
];
