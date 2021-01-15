import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ViewEmployees from "../views/ViewEmployees.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/employees",
        name: "Employees",
        component: ViewEmployees
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
