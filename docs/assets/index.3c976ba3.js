import{p as t,P as l}from"./Preview.b55bc7bb.js";import{f as s,a6 as i,u as r,o as u,c as m,b as n,z as v,r as F,w as _,F as y}from"./index.f11d68f1.js";function f(e){e.__sourceCode=`<script setup lang="ts">\r
import { PInput } from "pui-vue-pxs";\r
<\/script>\r
\r
<template>\r
    <PInput class="mt10" />\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const h=s({__name:"Input.preview",setup(e){return(o,c)=>(u(),i(r(t.exports.PInput),{class:"mt10"}))}});typeof f=="function"&&f(h);function d(e){e.__sourceCode=`<script setup lang="ts">\r
import { PInput } from "pui-vue-pxs";\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-d-c container">\r
        <PInput size="small" placeholder="small" />\r
        <PInput class="mt10" placeholder="default" />\r
        <PInput size="large" class="mt10" placeholder="large" />\r
    </div>\r
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const g={class:"flex flex-d-c container"},w=s({__name:"Input.size.preview",setup(e){return(o,c)=>(u(),m("div",g,[n(r(t.exports.PInput),{size:"small",placeholder:"small"}),n(r(t.exports.PInput),{class:"mt10",placeholder:"default"}),n(r(t.exports.PInput),{size:"large",class:"mt10",placeholder:"large"})]))}});typeof d=="function"&&d(w);function I(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PInput } from "pui-vue-pxs";\r
const inputValue = ref();\r
<\/script>\r
\r
<template>\r
    <PInput v-model="inputValue" clearable placeholder="\u53EF\u6E05\u9664\u56FE\u6807" />\r
</template>`,e.__sourceCodeTitle="\u53EF\u6E05\u9664"}const E=s({__name:"Input.clearable.preview",setup(e){const o=v();return(c,p)=>(u(),i(r(t.exports.PInput),{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=a=>o.value=a),clearable:"",placeholder:"\u53EF\u6E05\u9664\u56FE\u6807"},null,8,["modelValue"]))}});typeof I=="function"&&I(E);function x(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PInput } from "pui-vue-pxs";\r
const inputValue = ref();\r
<\/script>\r
\r
<template>\r
    <PInput v-model="inputValue" type="password" show-password />\r
</template>`,e.__sourceCodeTitle="\u5BC6\u7801\u8F93\u5165\u6846"}const b=s({__name:"Input.password.preview",setup(e){const o=v();return(c,p)=>(u(),i(r(t.exports.PInput),{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=a=>o.value=a),type:"password","show-password":""},null,8,["modelValue"]))}});typeof x=="function"&&x(b);function P(e){e.__sourceCode=`<script setup lang="ts">\r
import { PInput } from "pui-vue-pxs";\r
<\/script>\r
\r
<template>\r
    <div class="container">\r
        <PInput placeholder="\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807">\r
            <template #prefixIcon>\r
                <p-icon name="icon-eye" size="16px" color="#7e8db9"></p-icon>\r
            </template>\r
        </PInput>\r
        <PInput prefixIcon="icon-emoji" class="mt10" placeholder="\u524D\u7F00\u56FE\u6807"></PInput>\r
\r
        <PInput class="mt10" placeholder="\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807">\r
            <template #suffixIcon>\r
                <p-icon name="icon-eye" size="16px" color="#7e8db9"></p-icon>\r
            </template>\r
        </PInput>\r
        <PInput suffixIcon="icon-emoji" class="mt10" placeholder="\u540E\u7F00\u56FE\u6807"></PInput>\r
    </div>\r
</template>`,e.__sourceCodeTitle="\u5E26\u56FE\u6807\u8F93\u5165\u6846"}const z={class:"container"},V=s({__name:"Input.Icon.preview",setup(e){return(o,c)=>{const p=F("p-icon");return u(),m("div",z,[n(r(t.exports.PInput),{placeholder:"\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807"},{prefixIcon:_(()=>[n(p,{name:"icon-eye",size:"16px",color:"#7e8db9"})]),_:1}),n(r(t.exports.PInput),{prefixIcon:"icon-emoji",class:"mt10",placeholder:"\u524D\u7F00\u56FE\u6807"}),n(r(t.exports.PInput),{class:"mt10",placeholder:"\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807"},{suffixIcon:_(()=>[n(p,{name:"icon-eye",size:"16px",color:"#7e8db9"})]),_:1}),n(r(t.exports.PInput),{suffixIcon:"icon-emoji",class:"mt10",placeholder:"\u540E\u7F00\u56FE\u6807"})])}}});typeof P=="function"&&P(V);const C=s({__name:"index",setup(e){return(o,c)=>(u(),m(y,null,[n(l,{component:h}),n(l,{component:w}),n(l,{component:E}),n(l,{component:b}),n(l,{component:V})],64))}});export{C as default};
