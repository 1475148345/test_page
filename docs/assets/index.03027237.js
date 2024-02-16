import{p as s}from"./pui.f60918a2.js";import{u as k}from"./index.adffe6dd.js";import{f as c,c as l,b as e,w as u,u as r,o as m,d as i,F as v}from"./index.22c67b89.js";import{P as f}from"./Preview.992ce5c2.js";function _(n){n.__sourceCode=`<script setup lang="ts">\r
import { PButton } from 'pui-vue-pxs'\r
import { useToast } from 'pui-vue-pxs/hooks'\r
const click = (params: any) => {\r
    const toast = useToast()\r
    toast({ message: '\u6587\u5B57\u63D0\u793A', ...params })\r
}\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-button @click="click">\u6587\u5B57\u63D0\u793A</p-button>\r
        <p-button @click="click({ loading: true, message: '\u52A0\u8F7D\u4E2D...' })">\u52A0\u8F7D\u4E2D</p-button>\r
        <p-button @click="click({ forbidClick: true,message: '\u80CC\u666F\u4E0D\u53EF\u70B9\u51FB' })">\u80CC\u666F\u4E0D\u53EF\u70B9\u51FB</p-button>\r
        <p-button @click="click({ duration: 5000 , message: '5s\u540E\u5173\u95ED'})">5s\u540E\u5173\u95ED</p-button>\r
    </div>\r
</template>`,n.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const B={class:"flex flex-1 wrap"},x=c({__name:"Toast.preview",setup(n){const o=p=>{k()({message:"\u6587\u5B57\u63D0\u793A",...p})};return(p,t)=>(m(),l("div",B,[e(r(s.exports.PButton),{onClick:o},{default:u(()=>[i("\u6587\u5B57\u63D0\u793A")]),_:1}),e(r(s.exports.PButton),{onClick:t[0]||(t[0]=a=>o({loading:!0,message:"\u52A0\u8F7D\u4E2D..."}))},{default:u(()=>[i("\u52A0\u8F7D\u4E2D")]),_:1}),e(r(s.exports.PButton),{onClick:t[1]||(t[1]=a=>o({forbidClick:!0,message:"\u80CC\u666F\u4E0D\u53EF\u70B9\u51FB"}))},{default:u(()=>[i("\u80CC\u666F\u4E0D\u53EF\u70B9\u51FB")]),_:1}),e(r(s.exports.PButton),{onClick:t[2]||(t[2]=a=>o({duration:5e3,message:"5s\u540E\u5173\u95ED"}))},{default:u(()=>[i("5s\u540E\u5173\u95ED")]),_:1})]))}});typeof _=="function"&&_(x);function d(n){n.__sourceCode=`<script setup lang="ts">\r
import { PButton } from 'pui-vue-pxs'\r
import { useToast } from 'pui-vue-pxs/hooks'\r
const click = (params: any) => {\r
    const toast = useToast()\r
    toast({ message: '\u6587\u5B57\u63D0\u793A', ...params })\r
}\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-button @click="click({position:'top'})">\u9876\u90E8\u63D0\u793Atop</p-button>\r
        <p-button @click="click({position:'bottom'})">\u5E95\u90E8\u63D0\u793Abottom</p-button>\r
        <p-button @click="click({position:'20px'})">\u9876\u90E820px</p-button>\r
    </div>\r
</template>`,n.__sourceCodeTitle="\u63D0\u793A\u4F4D\u7F6E"}const C={class:"flex flex-1 wrap"},b=c({__name:"Toast.position.preview",setup(n){const o=p=>{k()({message:"\u6587\u5B57\u63D0\u793A",...p})};return(p,t)=>(m(),l("div",C,[e(r(s.exports.PButton),{onClick:t[0]||(t[0]=a=>o({position:"top"}))},{default:u(()=>[i("\u9876\u90E8\u63D0\u793Atop")]),_:1}),e(r(s.exports.PButton),{onClick:t[1]||(t[1]=a=>o({position:"bottom"}))},{default:u(()=>[i("\u5E95\u90E8\u63D0\u793Abottom")]),_:1}),e(r(s.exports.PButton),{onClick:t[2]||(t[2]=a=>o({position:"20px"}))},{default:u(()=>[i("\u9876\u90E820px")]),_:1})]))}});typeof d=="function"&&d(b);const F=c({__name:"index",setup(n){return(o,p)=>(m(),l(v,null,[e(f,{component:x}),e(f,{component:b})],64))}});export{F as default};
