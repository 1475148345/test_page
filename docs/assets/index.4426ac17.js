import{_ as x,p,P as k}from"./Preview.b55bc7bb.js";import{a as A}from"./index.242196a0.js";import{u as D}from"./index.36cb6764.js";import{f as F,z as f,c as _,b as n,w as t,u as o,o as B,d as a,a as v,F as $}from"./index.f11d68f1.js";function E(s){s.__sourceCode=`<script setup lang="ts">\r
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
</template>`,s.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const T={class:"flex flex-1 wrap"},S=v("div",null,"\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9",-1),w=F({__name:"Dialog.preview",setup(s){const r=D(),i=f(!1),l=f(!1),d=()=>{i.value=!0},m=()=>{l.value=!0},b=()=>{r({message:"\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE"})},g=()=>{r({message:"\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE"})};return(u,e)=>(B(),_("div",T,[n(o(x),{onClick:e[0]||(e[0]=c=>d())},{default:t(()=>[a("\u663E\u793A\u5F39\u7A97")]),_:1}),n(o(A),{visible:i.value,"onUpdate:visible":e[2]||(e[2]=c=>i.value=c),onConfirm:b,onCancel:g},{default:t(()=>[S,n(o(x),{onClick:e[1]||(e[1]=c=>m()),style:{"margin-top":"10px"}},{default:t(()=>[a("\u6253\u5F00\u53E6\u4E00\u4E2A\u5F39\u7A97")]),_:1})]),_:1},8,["visible"]),n(o(A),{visible:l.value,"onUpdate:visible":e[3]||(e[3]=c=>l.value=c)},{default:t(()=>[a("\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9\uFF0C\u8FD9\u662F\u5F39\u7A97\u5185\u5BB9")]),_:1},8,["visible"])]))}});typeof E=="function"&&E(w);function C(s){s.__sourceCode=`<script setup lang="ts">\r
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
</template>`,s.__sourceCodeTitle="\u81EA\u5B9A\u4E49footer"}const y={class:"flex flex-1 wrap"},U=v("p",null,"\u81EA\u5B9A\u4E49footer",-1),z={class:"p-dialog-footer p-flex p-flex-jc-end"},N=v("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5168\u5C4F\u5F39\u7A97",-1),P=F({__name:"Dialog.Footer.preview",setup(s){const r=D(),i=f(!1),l=f(!1),d=()=>{i.value=!0},m=()=>{r({message:"\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE"})},b=()=>{r({message:"\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE"})};return(g,u)=>(B(),_("div",y,[n(o(p.exports.PButton),{onClick:u[0]||(u[0]=e=>d())},{default:t(()=>[a("\u81EA\u5B9A\u4E49footer")]),_:1}),n(o(p.exports.PDialog),{visible:i.value,"onUpdate:visible":u[1]||(u[1]=e=>i.value=e),onConfirm:m,onCancel:b,width:"600px"},{footer:t(()=>[v("div",z,[n(o(p.exports.PButton),{type:"warning",size:"small",icon:"icon-add",iconColor:"#fff"},{default:t(()=>[a("\u4FDD\u5B58")]),_:1})])]),default:t(()=>[U]),_:1},8,["visible"]),n(o(p.exports.PButton),{onClick:u[2]||(u[2]=e=>l.value=!0)},{default:t(()=>[a("\u6253\u5F00\u5168\u5C4F\u5F39\u7A97")]),_:1}),n(o(p.exports.PDialog),{visible:l.value,"onUpdate:visible":u[3]||(u[3]=e=>l.value=e),fullscreen:""},{default:t(()=>[N]),_:1},8,["visible"])]))}});typeof C=="function"&&C(P);const H=F({__name:"index",setup(s){return(r,i)=>(B(),_($,null,[n(k,{component:w}),n(k,{component:P})],64))}});export{H as default};
