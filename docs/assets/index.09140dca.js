import{p as o}from"./pui.f60918a2.js";import{f as p,m as n,k as b,u as s,o as i,c as f,b as u,F as A}from"./index.22c67b89.js";import{P as m}from"./Preview.992ce5c2.js";function _(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PSelect } from "pui-vue-pxs";\r
const selectValue = ref("1");\r
const option = ref([\r
    {\r
        label: "\u82F9\u679C",\r
        value: "1",\r
    },\r
    {\r
        label: "\u6A58\u5B50",\r
        value: "2",\r
    },\r
    {\r
        label: "\u8349\u8393",\r
        value: "3",\r
        disabled: true,\r
    },\r
    {\r
        label: "\u7315\u7334\u6843",\r
        value: "4",\r
    },\r
    {\r
        label: "\u68A8",\r
        value: "5",\r
    },\r
]);\r
<\/script>\r
\r
<template>\r
    <p-select class="mt10" :option="option" v-model="selectValue" />\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const g=p({__name:"Select.preview",setup(e){const l=n("1"),t=n([{label:"\u82F9\u679C",value:"1"},{label:"\u6A58\u5B50",value:"2"},{label:"\u8349\u8393",value:"3",disabled:!0},{label:"\u7315\u7334\u6843",value:"4"},{label:"\u68A8",value:"5"}]);return(a,r)=>(i(),b(s(o.exports.PSelect),{class:"mt10",option:t.value,modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c)},null,8,["option","modelValue"]))}});typeof _=="function"&&_(g);function V(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PSelect } from "pui-vue-pxs";\r
const selectValue = ref("1");\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-d-c container">\r
        <p-select v-model="selectValue" size="small" placeholder="small" />\r
        <p-select v-model="selectValue" class="mt10" placeholder="default" />\r
        <p-select v-model="selectValue" size="large" class="mt10" placeholder="large" />\r
    </div>\r
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const w={class:"flex flex-d-c container"},$=p({__name:"Select.size.preview",setup(e){const l=n("1");return(t,a)=>(i(),f("div",w,[u(s(o.exports.PSelect),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=r=>l.value=r),size:"small",placeholder:"small"},null,8,["modelValue"]),u(s(o.exports.PSelect),{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=r=>l.value=r),class:"mt10",placeholder:"default"},null,8,["modelValue"]),u(s(o.exports.PSelect),{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=r=>l.value=r),size:"large",class:"mt10",placeholder:"large"},null,8,["modelValue"])]))}});typeof V=="function"&&V($);function x(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PSelect } from "pui-vue-pxs";\r
const selectValue = ref("1");\r
const selectList = ref([]);\r
const option = ref([\r
    {\r
        label: "\u82F9\u679C",\r
        value: "1",\r
    },\r
    {\r
        label: "\u6A58\u5B50",\r
        value: "2",\r
    },\r
    {\r
        label: "\u8349\u8393",\r
        value: "3",\r
        disabled: true,\r
    },\r
    {\r
        label: "\u7315\u7334\u6843",\r
        value: "4",\r
    },\r
    {\r
        label: "\u68A8",\r
        value: "5",\r
    },\r
]);\r
const optionList = ref([\r
    {\r
        label: "\u82F9\u679C",\r
        value: "1",\r
    },\r
    {\r
        label: "\u6A58\u5B50",\r
        value: "2",\r
    },\r
    {\r
        label: "\u8349\u8393",\r
        value: "3",\r
        disabled: true,\r
    },\r
    {\r
        label: "\u7315\u7334\u6843",\r
        value: "4",\r
    },\r
    {\r
        label: "\u68A8",\r
        value: "5",\r
    },\r
]);\r
<\/script>\r
\r
<template>\r
    <p-select class="mt10" filterable :option="option" v-model="selectValue" clearable />\r
    <p-select class="mt10" multiple :option="optionList" v-model="selectList" clearable />\r
</template>`,e.__sourceCodeTitle="\u6709\u7981\u7528\u9009\u9879"}const k=p({__name:"Select.disabled.preview",setup(e){const l=n("1"),t=n([]),a=n([{label:"\u82F9\u679C",value:"1"},{label:"\u6A58\u5B50",value:"2"},{label:"\u8349\u8393",value:"3",disabled:!0},{label:"\u7315\u7334\u6843",value:"4"},{label:"\u68A8",value:"5"}]),r=n([{label:"\u82F9\u679C",value:"1"},{label:"\u6A58\u5B50",value:"2"},{label:"\u8349\u8393",value:"3",disabled:!0},{label:"\u7315\u7334\u6843",value:"4"},{label:"\u68A8",value:"5"}]);return(c,v)=>(i(),f(A,null,[u(s(o.exports.PSelect),{class:"mt10",filterable:"",option:a.value,modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=d=>l.value=d),clearable:""},null,8,["option","modelValue"]),u(s(o.exports.PSelect),{class:"mt10",multiple:"",option:r.value,modelValue:t.value,"onUpdate:modelValue":v[1]||(v[1]=d=>t.value=d),clearable:""},null,8,["option","modelValue"])],64))}});typeof x=="function"&&x(k);function S(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PSelect } from "pui-vue-pxs";\r
const selectValue = ref();\r
const option = ref([\r
    {\r
        label: "\u82F9\u679C",\r
        value: "1",\r
    },\r
    {\r
        label: "\u6A58\u5B50",\r
        value: "2",\r
    },\r
    {\r
        label: "\u8349\u8393",\r
        value: "3",\r
    },\r
    {\r
        label: "\u7315\u7334\u6843",\r
        value: "4",\r
    },\r
    {\r
        label: "\u68A8",\r
        value: "5",\r
    },\r
]);\r
<\/script>\r
\r
<template>\r
    <p-select class="mt10" :option="option" v-model="selectValue" clearable />\r
</template>`,e.__sourceCodeTitle="\u53EF\u6E05\u9664"}const B=p({__name:"Select.clearable.preview",setup(e){const l=n(),t=n([{label:"\u82F9\u679C",value:"1"},{label:"\u6A58\u5B50",value:"2"},{label:"\u8349\u8393",value:"3"},{label:"\u7315\u7334\u6843",value:"4"},{label:"\u68A8",value:"5"}]);return(a,r)=>(i(),b(s(o.exports.PSelect),{class:"mt10",option:t.value,modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),clearable:""},null,8,["option","modelValue"]))}});typeof S=="function"&&S(B);function P(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PSelect } from "pui-vue-pxs";\r
const selectValue = ref();\r
const option = ref([\r
    {\r
        label: "\u82F9\u679C",\r
        value: "1",\r
    },\r
    {\r
        label: "\u6A58\u5B50",\r
        value: "2",\r
    },\r
    {\r
        label: "\u8349\u8393",\r
        value: "3",\r
    },\r
    {\r
        label: "\u7315\u7334\u6843",\r
        value: "4",\r
    },\r
    {\r
        label: "\u68A8",\r
        value: "5",\r
    },\r
]);\r
<\/script>\r
\r
<template>\r
    <p-select class="mt10" filterable :option="option" v-model="selectValue" clearable />\r
</template>`,e.__sourceCodeTitle="\u53EF\u641C\u7D22"}const U=p({__name:"Select.filterable.preview",setup(e){const l=n(),t=n([{label:"\u82F9\u679C",value:"1"},{label:"\u6A58\u5B50",value:"2"},{label:"\u8349\u8393",value:"3"},{label:"\u7315\u7334\u6843",value:"4"},{label:"\u68A8",value:"5"}]);return(a,r)=>(i(),b(s(o.exports.PSelect),{class:"mt10",filterable:"",option:t.value,modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),clearable:""},null,8,["option","modelValue"]))}});typeof P=="function"&&P(U);function C(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from "vue";\r
import { PSelect } from "pui-vue-pxs";\r
const selectValue = ref([]);\r
const option = ref([\r
    {\r
        label: "\u82F9\u679C",\r
        value: "1",\r
    },\r
    {\r
        label: "\u6A58\u5B50",\r
        value: "2",\r
    },\r
    {\r
        label: "\u8349\u8393",\r
        value: "3",\r
    },\r
    {\r
        label: "\u7315\u7334\u6843",\r
        value: "4",\r
    },\r
    {\r
        label: "\u68A8",\r
        value: "5",\r
    },\r
]);\r
<\/script>\r
\r
<template>\r
    <p-select class="mt10" multiple :option="option" v-model="selectValue" clearable />\r
</template>`,e.__sourceCodeTitle="\u591A\u9009multiple"}const F=p({__name:"Select.multiple.preview",setup(e){const l=n([]),t=n([{label:"\u82F9\u679C",value:"1"},{label:"\u6A58\u5B50",value:"2"},{label:"\u8349\u8393",value:"3"},{label:"\u7315\u7334\u6843",value:"4"},{label:"\u68A8",value:"5"}]);return(a,r)=>(i(),b(s(o.exports.PSelect),{class:"mt10",multiple:"",option:t.value,modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),clearable:""},null,8,["option","modelValue"]))}});typeof C=="function"&&C(F);const z=p({__name:"index",setup(e){return(l,t)=>(i(),f(A,null,[u(m,{component:g}),u(m,{component:$}),u(m,{component:k}),u(m,{component:B}),u(m,{component:U}),u(m,{component:F})],64))}});export{z as default};
