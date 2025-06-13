import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/views/LoginPage.vue";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // 路由级代码拆分
    //     component: () => import('../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router