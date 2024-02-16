import{d as x,P as k}from"./Preview.992ce5c2.js";import{a as A}from"./index.89fce92a.js";import{u as D}from"./index.adffe6dd.js";import{f as F,m as f,c as _,b as n,w as t,u,o as B,d as a,a as v,F as T}from"./index.22c67b89.js";import{p}from"./pui.f60918a2.js";function E(s){s.__sourceCode=`<script setup lang="ts">\r
import { PButton, PDialog } from '../../../lib'\r
import { ref } from 'vue';\r
import { useToast } from 'pui-vue-pxs/hooks/useToast';\r
const toast = useToast()\r
const visible = ref(false)\r
const visibleSub = ref(false)\r
const click = () => {\r
    visible.value = true\r
}\r
const clickSub = () => {\r
    visibleSub.value = true\r
}\r
const confirm=()=>{\r
    toast({ message: '\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE' })\r
}\r
const cancel=()=>{\r
    toast({ message: '\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE' })\r
}\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-button @click="click()">\u663E\u793A\u5F39\u7A97</p-button>\r
        <p-dialog v-model:visible="visible" @confirm="confirm" @cancel="cancel">\r
            <div>\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9</div>\r
            <p-button @click="clickSub()" style="margin-top: 10px;">\u6253\u5F00\u53E6\u4E00\u4E2A\u5F39\u7A97</p-button>\r
        </p-dialog>\r
        <p-dialog v-model:visible="visibleSub">\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9</p-dialog>\r
    </div>\r
</template>`,s.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const $={class:"flex flex-1 wrap"},S=v("div",null,"\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9",-1),w=F({__name:"Dialog.preview",setup(s){const l=D(),i=f(!1),r=f(!1),d=()=>{i.value=!0},m=()=>{r.value=!0},b=()=>{l({message:"\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE"})},g=()=>{l({message:"\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE"})};return(o,e)=>(B(),_("div",$,[n(u(x),{onClick:e[0]||(e[0]=c=>d())},{default:t(()=>[a("\u663E\u793A\u5F39\u7A97")]),_:1}),n(u(A),{visible:i.value,"onUpdate:visible":e[2]||(e[2]=c=>i.value=c),onConfirm:b,onCancel:g},{default:t(()=>[S,n(u(x),{onClick:e[1]||(e[1]=c=>m()),style:{"margin-top":"10px"}},{default:t(()=>[a("\u6253\u5F00\u53E6\u4E00\u4E2A\u5F39\u7A97")]),_:1})]),_:1},8,["visible"]),n(u(A),{visible:r.value,"onUpdate:visible":e[3]||(e[3]=c=>r.value=c)},{default:t(()=>[a("\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9")]),_:1},8,["visible"])]))}});typeof E=="function"&&E(w);function C(s){s.__sourceCode=`<script setup lang="ts">\r
import { PButton,PDialog } from 'pui-vue-pxs'\r
import { ref } from 'vue';\r
import { useToast } from 'pui-vue-pxs/hooks/useToast';\r
const toast = useToast()\r
const visible = ref(false)\r
const visibleFullscreen = ref(false)\r
const click = () => {\r
    visible.value = true\r
}\r
\r
const confirm=()=>{\r
    toast({ message: '\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE' })\r
}\r
const cancel=()=>{\r
    toast({ message: '\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE' })\r
}\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-button @click="click()">\u81EA\u5B9A\u4E49footer</p-button>\r
        <p-dialog v-model:visible="visible" @confirm="confirm" @cancel="cancel" width="600px">\r
            <p>\u81EA\u5B9A\u4E49footer</p>\r
            <template #footer>\r
                <div class="p-dialog-footer p-flex p-flex-jc-end">\r
                    <p-button type="warning" size="small" icon="icon-add" iconColor="#fff">\u4FDD\u5B58</p-button>\r
                </div>\r
            </template>\r
        </p-dialog>\r
        <p-button @click="visibleFullscreen=true">\u6253\u5F00\u5168\u5C4F\u5F39\u7A97</p-button>\r
        <p-dialog v-model:visible="visibleFullscreen" fullscreen>\r
            <p>\u8FD9\u662F\u4E00\u4E2A\u5168\u5C4F\u5F39\u7A97</p>\r
        </p-dialog>\r
    </div>\r
</template>`,s.__sourceCodeTitle="\u81EA\u5B9A\u4E49footer"}const y={class:"flex flex-1 wrap"},U=v("p",null,"\u81EA\u5B9A\u4E49footer",-1),N={class:"p-dialog-footer p-flex p-flex-jc-end"},V=v("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5168\u5C4F\u5F39\u7A97",-1),P=F({__name:"Dialog.Footer.preview",setup(s){const l=D(),i=f(!1),r=f(!1),d=()=>{i.value=!0},m=()=>{l({message:"\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE"})},b=()=>{l({message:"\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE"})};return(g,o)=>(B(),_("div",y,[n(u(p.exports.PButton),{onClick:o[0]||(o[0]=e=>d())},{default:t(()=>[a("\u81EA\u5B9A\u4E49footer")]),_:1}),n(u(p.exports.PDialog),{visible:i.value,"onUpdate:visible":o[1]||(o[1]=e=>i.value=e),onConfirm:m,onCancel:b,width:"600px"},{footer:t(()=>[v("div",N,[n(u(p.exports.PButton),{type:"warning",size:"small",icon:"icon-add",iconColor:"#fff"},{default:t(()=>[a("\u4FDD\u5B58")]),_:1})])]),default:t(()=>[U]),_:1},8,["visible"]),n(u(p.exports.PButton),{onClick:o[2]||(o[2]=e=>r.value=!0)},{default:t(()=>[a("\u6253\u5F00\u5168\u5C4F\u5F39\u7A97")]),_:1}),n(u(p.exports.PDialog),{visible:r.value,"onUpdate:visible":o[3]||(o[3]=e=>r.value=e),fullscreen:""},{default:t(()=>[V]),_:1},8,["visible"])]))}});typeof C=="function"&&C(P);const I=F({__name:"index",setup(s){return(l,i)=>(B(),_(T,null,[n(k,{component:w}),n(k,{component:P})],64))}});export{I as default};
