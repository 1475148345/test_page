import { createRouter, createWebHashHistory } from 'vue-router'
const history = createWebHashHistory()
// import {h} from 'vue'
// import Markdown from "../components/Markdown.vue";
// const md = (string) => h(Markdown, { content: string, key: string });
// import { html as Intro } from "../../markdown/intro.md";
// const IntroDoc = md(Intro);

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            redirect: '/doc/button',
        },
        {
            path: '/doc',
            component: () => import('../views/doc/index.vue'),
            children: [
                // { path: "intro", component: IntroDoc },
                {
                    path: 'button',
                    component: () => import('../views/doc/button/index.vue'),
                },
                {
                    path: 'layout',
                    component: () => import('../views/doc/layout/index.vue'),
                },
                {
                    path: 'icons',
                    component: () => import('../views/doc/icons/index.vue'),
                },
                {
                    path: 'loading',
                    component: () => import('../views/doc/loading/index.vue'),
                },
                {
                    path: 'image',
                    component: () => import('../views/doc/image/index.vue'),
                },
                {
                    path: 'toast',
                    component: () => import('../views/doc/toast/index.vue'),
                },
                {
                    path: 'message',
                    component: () => import('../views/doc/message/index.vue'),
                },
                {
                    path: 'progress',
                    component: () => import('../views/doc/progress/index.vue'),
                },
                {
                    path: 'dialog',
                    component: () => import('../views/doc/dialog/index.vue'),
                },
                {
                    path: 'tag',
                    component: () => import('../views/doc/tag/index.vue'),
                },
                {
                    path: 'tooltip',
                    component: () => import('../views/doc/tooltip/index.vue'),
                },
                {
                    path: 'popover',
                    component: () => import('../views/doc/popover/index.vue'),
                },
                // 表单
                {
                    path: 'input',
                    component: () => import('../views/doc/input/index.vue'),
                },
            ],
        },
    ],
});

export default router
