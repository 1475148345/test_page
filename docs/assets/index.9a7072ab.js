import{p as e,P as g}from"./Preview.b55bc7bb.js";import{f as t,c as n,b as r,u as s,o as c,_ as p,F as u}from"./index.f11d68f1.js";function l(o){o.__sourceCode=`<script setup lang="ts">\r
import { PProgress } from 'pui-vue-pxs'\r
\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap flex-d-c">\r
        <PProgress bg-color="#1989fa" :percentage="0"></PProgress>\r
        <PProgress bg-color="#1989fa"></PProgress>\r
        <PProgress color="info" titlePosition="left"></PProgress>\r
        <PProgress color="error" titlePosition="left"></PProgress>\r
        <PProgress color="success" :percentage="75" titlePosition="left"></PProgress>\r
        <PProgress color="warning" :percentage="100" titlePosition="left"></PProgress>\r
        <PProgress color="error" :percentage="75" titlePosition="center" :height="20"></PProgress>\r
        <PProgress color="warning" :percentage="100" titlePosition="center" :height="20"></PProgress>\r
\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap{\r
        .p-progress{\r
            margin-bottom: 20px;\r
        }\r
    }\r
</style>`,o.__sourceCodeTitle="\u8FDB\u5EA6\u6761\u4F4D\u7F6E"}const v={class:"flex flex-1 wrap flex-d-c"},f=t({__name:"Progress.title.preview",setup(o){return(i,P)=>(c(),n("div",v,[r(s(e.exports.PProgress),{"bg-color":"#1989fa",percentage:0}),r(s(e.exports.PProgress),{"bg-color":"#1989fa"}),r(s(e.exports.PProgress),{color:"info",titlePosition:"left"}),r(s(e.exports.PProgress),{color:"error",titlePosition:"left"}),r(s(e.exports.PProgress),{color:"success",percentage:75,titlePosition:"left"}),r(s(e.exports.PProgress),{color:"warning",percentage:100,titlePosition:"left"}),r(s(e.exports.PProgress),{color:"error",percentage:75,titlePosition:"center",height:20}),r(s(e.exports.PProgress),{color:"warning",percentage:100,titlePosition:"center",height:20})]))}});typeof l=="function"&&l(f);var h=p(f,[["__scopeId","data-v-7348c66a"]]);function a(o){o.__sourceCode=`<script setup lang="ts">\r
import { PProgress } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap flex-w-w">\r
        <PProgress color="error" :percentage="25" type="circle" :circleWidth="150"></PProgress>\r
        <PProgress color="warning" :percentage="50" type="circle" :circleWidth="150"></PProgress>\r
        <PProgress color="warning" :percentage="75" type="circle" :circleWidth="150"></PProgress>\r
        <PProgress color="success" :percentage="100" type="circle" :circleWidth="150" :strokeWidth="10"></PProgress>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap{\r
        .p-svg{\r
            margin-bottom: 20px;\r
            margin-right: 20px;\r
        }\r
    }\r
</style>`,o.__sourceCodeTitle="\u5706\u578B\u8FDB\u5EA6"}const w={class:"flex flex-1 wrap flex-w-w"},x=t({__name:"Progress.shape.preview",setup(o){return(i,P)=>(c(),n("div",w,[r(s(e.exports.PProgress),{color:"error",percentage:25,type:"circle",circleWidth:150}),r(s(e.exports.PProgress),{color:"warning",percentage:50,type:"circle",circleWidth:150}),r(s(e.exports.PProgress),{color:"warning",percentage:75,type:"circle",circleWidth:150}),r(s(e.exports.PProgress),{color:"success",percentage:100,type:"circle",circleWidth:150,strokeWidth:10})]))}});typeof a=="function"&&a(x);var m=p(x,[["__scopeId","data-v-150d2698"]]);function _(o){o.__sourceCode=`<script setup lang="ts">\r
import { PProgress } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap flex-d-c">\r
        <PProgress bg-color="#1989fa" :percentage="0"></PProgress>\r
        <PProgress bg-color="#1989fa"></PProgress>\r
        <PProgress color="info"></PProgress>\r
        <PProgress color="error"></PProgress>\r
        <PProgress color="success" :percentage="75"></PProgress>\r
        <PProgress color="warning" :percentage="100"></PProgress>\r
        <PProgress color="warning" :percentage="100" :height="20"></PProgress>\r
        <PProgress color="warning" :percentage="100" :height="20" title-position="center"></PProgress>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap{\r
        .p-progress{\r
            margin-bottom: 20px;\r
        }\r
    }\r
</style>`,o.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const y={class:"flex flex-1 wrap flex-d-c"},d=t({__name:"Progress.preview",setup(o){return(i,P)=>(c(),n("div",y,[r(s(e.exports.PProgress),{"bg-color":"#1989fa",percentage:0}),r(s(e.exports.PProgress),{"bg-color":"#1989fa"}),r(s(e.exports.PProgress),{color:"info"}),r(s(e.exports.PProgress),{color:"error"}),r(s(e.exports.PProgress),{color:"success",percentage:75}),r(s(e.exports.PProgress),{color:"warning",percentage:100}),r(s(e.exports.PProgress),{color:"warning",percentage:100,height:20}),r(s(e.exports.PProgress),{color:"warning",percentage:100,height:20,"title-position":"center"})]))}});typeof _=="function"&&_(d);var b=p(d,[["__scopeId","data-v-d946c67c"]]);const $=t({__name:"index",setup(o){return(i,P)=>(c(),n(u,null,[r(g,{component:b}),r(g,{component:h}),r(g,{component:m})],64))}});export{$ as default};
