import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'
import Index from './pages/Index'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/', name: 'index', component: Index
    },
    {
        path: '/home', name: 'home', component: Home
    },
    {
        path: '/about', name: 'about', component: About
    }
];

export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});