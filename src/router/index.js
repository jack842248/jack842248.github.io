import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/list/1',
        },
        {
            path: '/list/:id',
            name: 'list',
            component: () => import('@/views/BlogListViews.vue'),
        },
        {
            path: '/tags/:tag?',
            name: 'tags',
            component: () => import('@/views/TagsViews.vue'),
        },
        {
            path: '/post/:id',
            name: 'post',
            component: () => import('@/views/BlogPostViews.vue'),
        },
        {
            path: '/project',
            name: 'project',
            component: () => import('@/views/ProjectViews.vue'),
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/AboutViews.vue'),
        },
        {
            path: '/test',
            name: 'Test',
            component: () => import('@/views/TestViews.vue'),
        },
    ],
});

export default router
