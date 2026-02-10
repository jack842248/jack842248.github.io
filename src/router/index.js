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
            meta: {
                showSidebar: true,
            },
        },
        {
            path: '/post/:id',
            name: 'post',
            component: () => import('@/views/BlogPostViews.vue'),
            meta: {
                showSidebar: true,
            },
        },
        {
            path: '/tags/:tag?',
            name: 'tags',
            component: () => import('@/views/TagsViews.vue'),
            meta: {
                showSidebar: false,
            },
        },
        {
            path: '/project',
            name: 'project',
            component: () => import('@/views/ProjectViews.vue'),
            meta: {
                showSidebar: false,
            },
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/AboutViews.vue'),
            meta: {
                showSidebar: false,
            },
        },
    ],
});

export default router
