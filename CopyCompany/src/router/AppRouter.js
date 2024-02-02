import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: "/index",
        name: "index",
        meta: {
            title: "首页"
        },
        component: () => import("../components/index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});

export default router;