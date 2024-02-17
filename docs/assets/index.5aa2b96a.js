import{p as n,P as l}from"./Preview.b55bc7bb.js";import{f as u,c as s,b as t,w as e,u as o,o as c,d as i,F as h}from"./index.f11d68f1.js";function d(r){r.__sourceCode=`<script setup lang="ts">\r
import {PButton} from 'pui-vue-pxs'\r
\r
const click=():void=>{\r
  console.log(11);\r
}\r
<\/script>\r
\r
\r
<template>\r
  <div class="flex flex-w-w ai-c">\r
    <p-button @itemAction="click">default</p-button>\r
    <p-button type="primary" @itemAction="click">primary</p-button>\r
    <p-button type="info">info</p-button>\r
    <p-button type="danger">danger</p-button>\r
    <p-button type="warning">warning</p-button>\r
  </div>\r
</template>\r
\r
<style>\r
\r
</style>`,r.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const v={class:"flex flex-w-w ai-c"},x=u({__name:"Button.preview",setup(r){const p=()=>{console.log(11)};return(a,f)=>(c(),s("div",v,[t(o(n.exports.PButton),{onItemAction:p},{default:e(()=>[i("default")]),_:1}),t(o(n.exports.PButton),{type:"primary",onItemAction:p},{default:e(()=>[i("primary")]),_:1}),t(o(n.exports.PButton),{type:"info"},{default:e(()=>[i("info")]),_:1}),t(o(n.exports.PButton),{type:"danger"},{default:e(()=>[i("danger")]),_:1}),t(o(n.exports.PButton),{type:"warning"},{default:e(()=>[i("warning")]),_:1})]))}});typeof d=="function"&&d(x);function _(r){r.__sourceCode=`<script setup lang="ts">\r
import { PButton, PIcon } from "pui-vue-pxs";\r
const click = () => {\r
    console.log(11);\r
};\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-w-w ai-c">\r
        <p-button @itemAction="click" icon="icon-emoji">icon-emoji</p-button>\r
        <p-button type="primary">\r
            <template #icon>\r
                <p-icon name="icon-sousuo" size="16px" color="#fff"></p-icon>\r
            </template>\r
            icon-sousuo\r
        </p-button>\r
        <p-button type="info" icon="icon-add" iconColor="#fff">icon-add</p-button>\r
        <p-button type="danger" icon="icon-shanchu" iconColor="#fff">icon-shanchu</p-button>\r
        <p-button type="warning" icon="icon-fangdazhanshi" iconColor="#fff">icon-fangdazhanshi</p-button>\r
    </div>\r
</template>`,r.__sourceCodeTitle="\u5E26\u56FE\u6807"}const z={class:"flex flex-w-w ai-c"},g=u({__name:"Button.icon.preview",setup(r){const p=()=>{console.log(11)};return(a,f)=>(c(),s("div",z,[t(o(n.exports.PButton),{onItemAction:p,icon:"icon-emoji"},{default:e(()=>[i("icon-emoji")]),_:1}),t(o(n.exports.PButton),{type:"primary"},{icon:e(()=>[t(o(n.exports.PIcon),{name:"icon-sousuo",size:"16px",color:"#fff"})]),default:e(()=>[i(" icon-sousuo ")]),_:1}),t(o(n.exports.PButton),{type:"info",icon:"icon-add",iconColor:"#fff"},{default:e(()=>[i("icon-add")]),_:1}),t(o(n.exports.PButton),{type:"danger",icon:"icon-shanchu",iconColor:"#fff"},{default:e(()=>[i("icon-shanchu")]),_:1}),t(o(n.exports.PButton),{type:"warning",icon:"icon-fangdazhanshi",iconColor:"#fff"},{default:e(()=>[i("icon-fangdazhanshi")]),_:1})]))}});typeof _=="function"&&_(g);function m(r){r.__sourceCode=`<script setup lang="ts">\r
import { PButton } from 'pui-vue-pxs'\r
const click=()=>{\r
  console.log(11);\r
}\r
<\/script>\r
\r
\r
<template>\r
<div class="flex flex-w-w ai-c">\r
  <p-button @itemAction="click" disabled>\u7981\u7528\u72B6\u6001</p-button>\r
  <p-button type="warning" @itemAction="click" disabled icon='icon-add' iconColor="#fff">\u7981\u7528\u72B6\u6001</p-button>\r
  <p-button type="primary" @itemAction="click" disabled>\u7981\u7528\u72B6\u6001</p-button>\r
  <p-button type="info" disabled>\u7981\u7528\u72B6\u6001</p-button>\r
  <p-button type="danger" disabled>\u7981\u7528\u72B6\u6001</p-button>\r
  <p-button type="warning" disabled>\u7981\u7528\u72B6\u6001</p-button>\r
  <p-button type="primary" size="big" class="mt10" @itemAction="click" loading>\u52A0\u8F7D\u72B6\u6001</p-button>\r
</div>\r
\r
</template>`,r.__sourceCodeTitle="\u6309\u94AE\u72B6\u6001"}const k={class:"flex flex-w-w ai-c"},B=u({__name:"Button.status.preview",setup(r){const p=()=>{console.log(11)};return(a,f)=>(c(),s("div",k,[t(o(n.exports.PButton),{onItemAction:p,disabled:""},{default:e(()=>[i("\u7981\u7528\u72B6\u6001")]),_:1}),t(o(n.exports.PButton),{type:"warning",onItemAction:p,disabled:"",icon:"icon-add",iconColor:"#fff"},{default:e(()=>[i("\u7981\u7528\u72B6\u6001")]),_:1}),t(o(n.exports.PButton),{type:"primary",onItemAction:p,disabled:""},{default:e(()=>[i("\u7981\u7528\u72B6\u6001")]),_:1}),t(o(n.exports.PButton),{type:"info",disabled:""},{default:e(()=>[i("\u7981\u7528\u72B6\u6001")]),_:1}),t(o(n.exports.PButton),{type:"danger",disabled:""},{default:e(()=>[i("\u7981\u7528\u72B6\u6001")]),_:1}),t(o(n.exports.PButton),{type:"warning",disabled:""},{default:e(()=>[i("\u7981\u7528\u72B6\u6001")]),_:1}),t(o(n.exports.PButton),{type:"primary",size:"big",class:"mt10",onItemAction:p,loading:""},{default:e(()=>[i("\u52A0\u8F7D\u72B6\u6001")]),_:1})]))}});typeof m=="function"&&m(B);function b(r){r.__sourceCode=`<script setup lang="ts">\r
import { PButton } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
<div class="flex flex-w-w ai-c">\r
  <p-button size="small">small\u5C3A\u5BF8</p-button>\r
  <p-button type="warning" size="small">small\u5C3A\u5BF8</p-button>\r
  <p-button type="primary" size="normal">normal\u5C3A\u5BF8</p-button>\r
  <p-button type="info" size="big" class="mt10">big\u5C3A\u5BF8</p-button>\r
</div>\r
</template>\r
\r
<style>\r
\r
</style>`,r.__sourceCodeTitle="\u6309\u94AE\u5927\u5C0F"}const A={class:"flex flex-w-w ai-c"},w=u({__name:"Button.size.preview",setup(r){return(p,a)=>(c(),s("div",A,[t(o(n.exports.PButton),{size:"small"},{default:e(()=>[i("small\u5C3A\u5BF8")]),_:1}),t(o(n.exports.PButton),{type:"warning",size:"small"},{default:e(()=>[i("small\u5C3A\u5BF8")]),_:1}),t(o(n.exports.PButton),{type:"primary",size:"normal"},{default:e(()=>[i("normal\u5C3A\u5BF8")]),_:1}),t(o(n.exports.PButton),{type:"info",size:"big",class:"mt10"},{default:e(()=>[i("big\u5C3A\u5BF8")]),_:1})]))}});typeof b=="function"&&b(w);function y(r){r.__sourceCode=`<script setup lang="ts">\r
import { PButton } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
<div class="flex flex-w-w ai-c">\r
  <p-button size="small" plain></p-button>\r
  <p-button type="primary" size="normal" plain></p-button>\r
  <p-button type="danger" plain></p-button>\r
  <p-button type="warning" plain></p-button>\r
  <p-button type="info" size="big" plain class="mt10"></p-button>\r
</div>\r
</template>`,r.__sourceCodeTitle="\u6734\u7D20\u6309\u94AE"}const C={class:"flex flex-w-w ai-c"},P=u({__name:"Button.plain.preview",setup(r){return(p,a)=>(c(),s("div",C,[t(o(n.exports.PButton),{size:"small",plain:""}),t(o(n.exports.PButton),{type:"primary",size:"normal",plain:""}),t(o(n.exports.PButton),{type:"danger",plain:""}),t(o(n.exports.PButton),{type:"warning",plain:""}),t(o(n.exports.PButton),{type:"info",size:"big",plain:"",class:"mt10"})]))}});typeof y=="function"&&y(P);const F=u({__name:"index",setup(r){return(p,a)=>(c(),s(h,null,[t(l,{component:x}),t(l,{component:g}),t(l,{component:B}),t(l,{component:w}),t(l,{component:P})],64))}});export{F as default};
