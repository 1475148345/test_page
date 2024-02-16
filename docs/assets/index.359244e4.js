import{p as e}from"./pui.f60918a2.js";import{f,m,b7 as B,c as _,b as o,w as t,u as n,o as c,d as p,a as v,k as b}from"./index.22c67b89.js";import{P as x}from"./Preview.992ce5c2.js";function a(l){l.__sourceCode=`<script setup lang="ts">\r
import { PPopover, PButton } from 'pui-vue-pxs'\r
import { ref,watch } from 'vue'\r
const visible = ref(false)\r
watch(visible,(val)=>{\r
    console.log(val);\r
})\r
<\/script>\r
\r
\r
<template>\r
  <div class="flex flex-w-w ai-c">\r
    <p-popover >\r
        <p-button>\u9ED8\u8BA4</p-button>\r
    </p-popover>\r
    <p-popover placement="top" >\r
        <p-button>top</p-button>\r
    </p-popover>\r
    <p-popover placement="bottom" >\r
        <p-button>bottom</p-button>\r
    </p-popover>\r
    <p-popover placement="right" >\r
        <p-button>right</p-button>\r
    </p-popover>\r
    <p-popover placement="left" >\r
        <p-button>left</p-button>\r
    </p-popover>\r
    <p-popover placement="top" isClickShow >\r
        <p-button>\u70B9\u51FB\u5F39\u51FA</p-button>\r
    </p-popover>\r
    <p-popover placement="top" isClickShow v-model:visible="visible">\r
        <template #content>\r
            <p style="padding: 10px 0;">\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u786E\u5B9A\u5220\u9664\u5417,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u786E\u5B9A\u5220\u9664\u5417?</p>\r
            <div style="display: flex;justify-content: flex-end;">\r
                <p-button size="mini" @click="visible=false">\u53D6\u6D88</p-button>\r
                <p-button size="mini" type="info" @click="visible=false">\u786E\u5B9A</p-button>\r
            </div>\r
        </template>\r
        <p-button>\u70B9\u51FB\u5F39\u51FA,\u81EA\u5B9A\u4E49\u5F39\u7A97\u5185\u5BB9</p-button>\r
    </p-popover>\r
  </div>\r
</template>\r
\r
<style>\r
\r
</style>`,l.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const P={class:"flex flex-w-w ai-c"},w=v("p",{style:{padding:"10px 0"}},"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u786E\u5B9A\u5220\u9664\u5417,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u786E\u5B9A\u5220\u9664\u5417?",-1),F={style:{display:"flex","justify-content":"flex-end"}},d=f({__name:"Popover.preview",setup(l){const u=m(!1);return B(u,s=>{console.log(s)}),(s,r)=>(c(),_("div",P,[o(n(e.exports.PPopover),null,{default:t(()=>[o(n(e.exports.PButton),null,{default:t(()=>[p("\u9ED8\u8BA4")]),_:1})]),_:1}),o(n(e.exports.PPopover),{placement:"top"},{default:t(()=>[o(n(e.exports.PButton),null,{default:t(()=>[p("top")]),_:1})]),_:1}),o(n(e.exports.PPopover),{placement:"bottom"},{default:t(()=>[o(n(e.exports.PButton),null,{default:t(()=>[p("bottom")]),_:1})]),_:1}),o(n(e.exports.PPopover),{placement:"right"},{default:t(()=>[o(n(e.exports.PButton),null,{default:t(()=>[p("right")]),_:1})]),_:1}),o(n(e.exports.PPopover),{placement:"left"},{default:t(()=>[o(n(e.exports.PButton),null,{default:t(()=>[p("left")]),_:1})]),_:1}),o(n(e.exports.PPopover),{placement:"top",isClickShow:""},{default:t(()=>[o(n(e.exports.PButton),null,{default:t(()=>[p("\u70B9\u51FB\u5F39\u51FA")]),_:1})]),_:1}),o(n(e.exports.PPopover),{placement:"top",isClickShow:"",visible:u.value,"onUpdate:visible":r[2]||(r[2]=i=>u.value=i)},{content:t(()=>[w,v("div",F,[o(n(e.exports.PButton),{size:"mini",onClick:r[0]||(r[0]=i=>u.value=!1)},{default:t(()=>[p("\u53D6\u6D88")]),_:1}),o(n(e.exports.PButton),{size:"mini",type:"info",onClick:r[1]||(r[1]=i=>u.value=!1)},{default:t(()=>[p("\u786E\u5B9A")]),_:1})])]),default:t(()=>[o(n(e.exports.PButton),null,{default:t(()=>[p("\u70B9\u51FB\u5F39\u51FA,\u81EA\u5B9A\u4E49\u5F39\u7A97\u5185\u5BB9")]),_:1})]),_:1},8,["visible"])]))}});typeof a=="function"&&a(d);const E=f({__name:"index",setup(l){return(u,s)=>(c(),b(x,{component:d}))}});export{E as default};
