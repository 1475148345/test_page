import { createRouter, createWebHashHistory } from 'vue-router'
const history = createWebHashHistory()
/* import {h} from 'vue'
import Markdown from "../components/Markdown.vue";
const md = (string) => h(Markdown, { content: string, key: string });
import { html as Intro } from "../../markdown/intro.md";
const IntroDoc = md(Intro); */

const router = createRouter({
    history,
    routes:[
        {
            path:'/',
            redirect:'/doc/button'
        },{
            path:'/doc',
            component:()=>import('../views/doc/index.vue'),
            children:[
                // { path: "intro", component: IntroDoc },
                { path:'button',component:()=>import('../views/doc/button/index.vue') },
                { path:'layout',component:()=>import('../views/doc/layout/index.vue') },
                { path:'icons',component:()=>import('../views/doc/icons/index.vue') },
                { path:'loading',component:()=>import('../views/doc/loading/index.vue') },
            ]
        }
    ]
})

export default router
