import{p as a}from"./pui.f60918a2.js";import{f as l,c as p,b as e,w as n,u as t,o as c,d as o,F as h}from"./index.22c67b89.js";import{u as v}from"./index.adffe6dd.js";import{P as u}from"./Preview.992ce5c2.js";function g(s){s.__sourceCode=`<script setup lang="ts">\r
import { PTag } from 'pui-vue-pxs'\r
const click=():void=>{\r
  console.log(11);\r
}\r
<\/script>\r
\r
\r
<template>\r
  <div class="flex flex-w-w ai-c">\r
    <p-tag @itemAction="click">default</p-tag>\r
    <p-tag type="primary" @itemAction="click">primary</p-tag>\r
    <p-tag type="info">info</p-tag>\r
    <p-tag type="danger">danger</p-tag>\r
    <p-tag type="warning">warning</p-tag>\r
  </div>\r
</template>\r
\r
<style>\r
\r
</style>`,s.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const B={class:"flex flex-w-w ai-c"},y=l({__name:"Tag.preview",setup(s){const r=()=>{console.log(11)};return(i,f)=>(c(),p("div",B,[e(t(a.exports.PTag),{onItemAction:r},{default:n(()=>[o("default")]),_:1}),e(t(a.exports.PTag),{type:"primary",onItemAction:r},{default:n(()=>[o("primary")]),_:1}),e(t(a.exports.PTag),{type:"info"},{default:n(()=>[o("info")]),_:1}),e(t(a.exports.PTag),{type:"danger"},{default:n(()=>[o("danger")]),_:1}),e(t(a.exports.PTag),{type:"warning"},{default:n(()=>[o("warning")]),_:1})]))}});typeof g=="function"&&g(y);function m(s){s.__sourceCode=`<script setup lang="ts">\r
import { PTag, PIcon } from 'pui-vue-pxs'\r
const click=()=>{\r
  console.log(11);\r
}\r
<\/script>\r
\r
\r
<template>\r
  <div class="flex flex-w-w ai-c">\r
    <p-tag @itemAction="click" icon='icon-emoji'>icon-emoji</p-tag>\r
    <p-tag type="primary">\r
      <template #icon>\r
        <p-icon name="icon-sousuo" size="16px" color="#fff"></p-icon>\r
      </template>\r
      icon-sousuo\r
    </p-tag>\r
    <p-tag type="info" icon='icon-add' iconColor="#fff">icon-add</p-tag>\r
    <p-tag type="danger" icon='icon-shanchu' iconColor='#fff'>icon-shanchu</p-tag>\r
    <p-tag type="warning" icon='icon-fangdazhanshi' iconColor='#fff'>icon-fangdazhanshi</p-tag>\r
  </div>\r
</template>`,s.__sourceCodeTitle="\u5E26\u56FE\u6807"}const b={class:"flex flex-w-w ai-c"},T=l({__name:"Tag.icon.preview",setup(s){const r=()=>{console.log(11)};return(i,f)=>(c(),p("div",b,[e(t(a.exports.PTag),{onItemAction:r,icon:"icon-emoji"},{default:n(()=>[o("icon-emoji")]),_:1}),e(t(a.exports.PTag),{type:"primary"},{icon:n(()=>[e(t(a.exports.PIcon),{name:"icon-sousuo",size:"16px",color:"#fff"})]),default:n(()=>[o(" icon-sousuo ")]),_:1}),e(t(a.exports.PTag),{type:"info",icon:"icon-add",iconColor:"#fff"},{default:n(()=>[o("icon-add")]),_:1}),e(t(a.exports.PTag),{type:"danger",icon:"icon-shanchu",iconColor:"#fff"},{default:n(()=>[o("icon-shanchu")]),_:1}),e(t(a.exports.PTag),{type:"warning",icon:"icon-fangdazhanshi",iconColor:"#fff"},{default:n(()=>[o("icon-fangdazhanshi")]),_:1})]))}});typeof m=="function"&&m(T);function _(s){s.__sourceCode=`<script setup lang="ts">\r
import { PTag } from 'pui-vue-pxs'\r
import { useToast } from 'pui-vue-pxs/hooks'\r
const toast = useToast()\r
const click=()=>{\r
    toast({ message: '\u70B9\u51FB\u4E86\u6807\u7B7E' })\r
}\r
const close=()=>{\r
    toast({ message: '\u70B9\u51FB\u4E86\u5173\u95ED' })\r
}\r
<\/script>\r
\r
\r
<template>\r
<div class="flex flex-w-w ai-c">\r
  <p-tag size="small" plain @click="click" @close="close" closable>\u6807\u7B7E</p-tag>\r
  <p-tag type="primary" size="small" plain closable>\u6807\u7B7E</p-tag>\r
  <p-tag type="danger" size="small" plain closable>\u6807\u7B7E</p-tag>\r
  <p-tag type="warning" size="small" plain closable>\u6807\u7B7E</p-tag>\r
  <p-tag type="info" size="small" plain closable>\u6807\u7B7E</p-tag>\r
</div>\r
\r
</template>`,s.__sourceCodeTitle="\u663E\u793A\u5173\u95ED\u6309\u94AE"}const k={class:"flex flex-w-w ai-c"},w=l({__name:"Tag.close.preview",setup(s){const r=v(),i=()=>{r({message:"\u70B9\u51FB\u4E86\u6807\u7B7E"})},f=()=>{r({message:"\u70B9\u51FB\u4E86\u5173\u95ED"})};return($,A)=>(c(),p("div",k,[e(t(a.exports.PTag),{size:"small",plain:"",onClick:i,onClose:f,closable:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"primary",size:"small",plain:"",closable:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"danger",size:"small",plain:"",closable:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"warning",size:"small",plain:"",closable:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"info",size:"small",plain:"",closable:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1})]))}});typeof _=="function"&&_(w);function d(s){s.__sourceCode=`<script setup lang="ts">\r
import { PTag } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
<div class="flex flex-w-w ai-c">\r
  <p-tag size="small">small\u5C3A\u5BF8</p-tag>\r
  <p-tag type="warning" size="small">small\u5C3A\u5BF8</p-tag>\r
  <p-tag type="primary" size="normal">normal\u5C3A\u5BF8</p-tag>\r
  <p-tag type="info" size="big" class="mt10">big\u5C3A\u5BF8</p-tag>\r
</div>\r
</template>\r
\r
<style>\r
\r
</style>`,s.__sourceCodeTitle="\u6807\u7B7E\u5927\u5C0F"}const C={class:"flex flex-w-w ai-c"},z=l({__name:"Tag.size.preview",setup(s){return(r,i)=>(c(),p("div",C,[e(t(a.exports.PTag),{size:"small"},{default:n(()=>[o("small\u5C3A\u5BF8")]),_:1}),e(t(a.exports.PTag),{type:"warning",size:"small"},{default:n(()=>[o("small\u5C3A\u5BF8")]),_:1}),e(t(a.exports.PTag),{type:"primary",size:"normal"},{default:n(()=>[o("normal\u5C3A\u5BF8")]),_:1}),e(t(a.exports.PTag),{type:"info",size:"big",class:"mt10"},{default:n(()=>[o("big\u5C3A\u5BF8")]),_:1})]))}});typeof d=="function"&&d(z);function x(s){s.__sourceCode=`<script setup lang="ts">\r
import { PTag } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
<div class="flex flex-w-w ai-c">\r
  <p-tag size="small" plain>\u6807\u7B7E</p-tag>\r
  <p-tag type="primary" size="small" plain>\u6807\u7B7E</p-tag>\r
  <p-tag type="danger" size="small" plain>\u6807\u7B7E</p-tag>\r
  <p-tag type="warning" size="small" plain>\u6807\u7B7E</p-tag>\r
  <p-tag type="info" size="small" plain>\u6807\u7B7E</p-tag>\r
</div>\r
</template>`,s.__sourceCodeTitle="\u6734\u7D20\u6807\u7B7E"}const E={class:"flex flex-w-w ai-c"},P=l({__name:"Tag.plain.preview",setup(s){return(r,i)=>(c(),p("div",E,[e(t(a.exports.PTag),{size:"small",plain:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"primary",size:"small",plain:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"danger",size:"small",plain:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"warning",size:"small",plain:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1}),e(t(a.exports.PTag),{type:"info",size:"small",plain:""},{default:n(()=>[o("\u6807\u7B7E")]),_:1})]))}});typeof x=="function"&&x(P);const V=l({__name:"index",setup(s){return(r,i)=>(c(),p(h,null,[e(u,{component:y}),e(u,{component:z}),e(u,{component:T}),e(u,{component:w}),e(u,{component:P})],64))}});export{V as default};
