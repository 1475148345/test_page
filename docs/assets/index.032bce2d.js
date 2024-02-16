import{a as _,P as a}from"./Preview.992ce5c2.js";import{P as r}from"./index.89fce92a.js";import{f as l,k as i,u as n,o as c,c as m,b as t,m as v,w as f,F as y}from"./index.22c67b89.js";function d(e){e.__sourceCode=`<script setup lang="ts">\r
import { PInput } from '@/lib'\r
<\/script>\r
\r
<template>\r
	<PInput class="mt10"/>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const b=l({__name:"Input.preview",setup(e){return(o,p)=>(c(),i(n(r),{class:"mt10"}))}});typeof d=="function"&&d(b);function I(e){e.__sourceCode=`<script setup lang="ts">\r
import { PInput } from '@/lib'\r
<\/script>\r
\r
<template>\r
	<div class="flex flex-d-c container">\r
		<PInput size="small" placeholder="small"/>\r
		<PInput class="mt10" placeholder="default"/>\r
		<PInput size="large" class="mt10" placeholder="large"/>\r
	</div>\r
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const g={class:"flex flex-d-c container"},w=l({__name:"Input.size.preview",setup(e){return(o,p)=>(c(),m("div",g,[t(n(r),{size:"small",placeholder:"small"}),t(n(r),{class:"mt10",placeholder:"default"}),t(n(r),{size:"large",class:"mt10",placeholder:"large"})]))}});typeof I=="function"&&I(w);function x(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue'\r
import { PInput } from '@/lib'\r
const inputValue = ref()\r
<\/script>\r
\r
<template>\r
	<PInput v-model="inputValue" clearable placeholder="\u53EF\u6E05\u9664\u56FE\u6807"/>\r
</template>`,e.__sourceCodeTitle="\u53EF\u6E05\u9664"}const E=l({__name:"Input.clearable.preview",setup(e){const o=v();return(p,s)=>(c(),i(n(r),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=u=>o.value=u),clearable:"",placeholder:"\u53EF\u6E05\u9664\u56FE\u6807"},null,8,["modelValue"]))}});typeof x=="function"&&x(E);function P(e){e.__sourceCode=`<script setup lang="ts">\r
import { ref } from 'vue'\r
import { PInput } from '@/lib'\r
const inputValue = ref()\r
<\/script>\r
\r
<template>\r
	<PInput v-model="inputValue" type="password" show-password/>\r
</template>`,e.__sourceCodeTitle="\u5BC6\u7801\u8F93\u5165\u6846"}const V=l({__name:"Input.password.preview",setup(e){const o=v();return(p,s)=>(c(),i(n(r),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=u=>o.value=u),type:"password","show-password":""},null,8,["modelValue"]))}});typeof P=="function"&&P(V);function h(e){e.__sourceCode=`<script setup lang="ts">\r
import { PInput, PIcon } from '@/lib'\r
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
</template>`,e.__sourceCodeTitle="\u5E26\u56FE\u6807\u8F93\u5165\u6846"}const $={class:"container"},F=l({__name:"Input.Icon.preview",setup(e){return(o,p)=>(c(),m("div",$,[t(n(r),{placeholder:"\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807"},{prefixIcon:f(()=>[t(n(_),{name:"icon-eye",size:"16px",color:"#7e8db9"})]),_:1}),t(n(r),{prefixIcon:"icon-emoji",class:"mt10",placeholder:"\u524D\u7F00\u56FE\u6807"}),t(n(r),{class:"mt10",placeholder:"\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807"},{suffixIcon:f(()=>[t(n(_),{name:"icon-eye",size:"16px",color:"#7e8db9"})]),_:1}),t(n(r),{suffixIcon:"icon-emoji",class:"mt10",placeholder:"\u540E\u7F00\u56FE\u6807"})]))}});typeof h=="function"&&h(F);const B=l({__name:"index",setup(e){return(o,p)=>(c(),m(y,null,[t(a,{component:b}),t(a,{component:w}),t(a,{component:E}),t(a,{component:V}),t(a,{component:F})],64))}});export{B as default};
