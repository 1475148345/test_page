import{p}from"./pui.f60918a2.js";import{g as i}from"./index.f9bfa2ba.js";import{f as a,c as n,b as t,u as e,o as s,_ as m,w as j,F as L}from"./index.22c67b89.js";import{P as o}from"./Preview.992ce5c2.js";import"./index.adffe6dd.js";function l(r){r.__sourceCode=`<script setup lang="ts">\r
import { PImage } from 'pui-vue-pxs'\r
import { getImageUrl } from '@/util'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-image width="200px" height="200px" :src="getImageUrl('123.jpg')"></p-image>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
\r
</style>`,r.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const z={class:"flex flex-1 wrap"},f=a({__name:"Image.preview",setup(r){return(g,c)=>(s(),n("div",z,[t(e(p.exports.PImage),{width:"200px",height:"200px",src:e(i)("123.jpg")},null,8,["src"])]))}});typeof l=="function"&&l(f);function _(r){r.__sourceCode=`<script setup lang="ts">\r
import { PImage } from 'pui-vue-pxs'\r
import { getImageUrl } from '@/util'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-image round width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>\r
        <p-image radius="5px" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap .p-image{\r
        margin-right: 10px;\r
    }\r
</style>`,r.__sourceCodeTitle="\u56FE\u7247\u5F62\u72B6"}const F={class:"flex flex-1 wrap"},w=a({__name:"Image.Round.preview",setup(r){return(g,c)=>(s(),n("div",F,[t(e(p.exports.PImage),{round:"",width:"200px",height:"200px",src:e(i)("234.jpg")},null,8,["src"]),t(e(p.exports.PImage),{radius:"5px",width:"200px",height:"200px",src:e(i)("234.jpg")},null,8,["src"])]))}});typeof _=="function"&&_(w);var b=m(w,[["__scopeId","data-v-335b8470"]]);function d(r){r.__sourceCode=`<script setup lang="ts">\r
import { PImage } from 'pui-vue-pxs'\r
import { getImageUrl } from '@/util'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-image fit="contain" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>\r
        <p-image fit="cover" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>\r
        <p-image fit="none" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>\r
        <p-image fit="scale-down" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>\r
        <p-image fit="fit" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap .p-image{\r
        margin-right: 10px;\r
    }\r
</style>`,r.__sourceCodeTitle="\u586B\u5145\u65B9\u5F0F"}const U={class:"flex flex-1 wrap"},v=a({__name:"Image.Fit.preview",setup(r){return(g,c)=>(s(),n("div",U,[t(e(p.exports.PImage),{fit:"contain",width:"200px",height:"200px",src:e(i)("234.jpg")},null,8,["src"]),t(e(p.exports.PImage),{fit:"cover",width:"200px",height:"200px",src:e(i)("234.jpg")},null,8,["src"]),t(e(p.exports.PImage),{fit:"none",width:"200px",height:"200px",src:e(i)("234.jpg")},null,8,["src"]),t(e(p.exports.PImage),{fit:"scale-down",width:"200px",height:"200px",src:e(i)("234.jpg")},null,8,["src"]),t(e(p.exports.PImage),{fit:"fit",width:"200px",height:"200px",src:e(i)("234.jpg")},null,8,["src"])]))}});typeof d=="function"&&d(v);var $=m(v,[["__scopeId","data-v-a84390dc"]]);function x(r){r.__sourceCode=`<script setup lang="ts">\r
import { PIcon, PImage } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-image fit="contain" width="200px" height="200px"></p-image>\r
        <p-image fit="contain" width="200px" height="200px">\r
            <template #loadingIcon>\r
                <p-icon name="icon-emoji" size="32px" color="#969799"></p-icon>\r
            </template>\r
        </p-image>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap .p-image{\r
        margin-right: 10px;\r
    }\r
</style>`,r.__sourceCodeTitle="\u52A0\u8F7D\u4E2D"}const D={class:"flex flex-1 wrap"},I=a({__name:"Image.Loading.preview",setup(r){return(g,c)=>(s(),n("div",D,[t(e(p.exports.PImage),{fit:"contain",width:"200px",height:"200px"}),t(e(p.exports.PImage),{fit:"contain",width:"200px",height:"200px"},{loadingIcon:j(()=>[t(e(p.exports.PIcon),{name:"icon-emoji",size:"32px",color:"#969799"})]),_:1})]))}});typeof x=="function"&&x(I);var C=m(I,[["__scopeId","data-v-1d01ae88"]]);function h(r){r.__sourceCode=`<script setup lang="ts">\r
import { PImage } from 'pui-vue-pxs'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-image fit="contain" width="200px" height="200px" src="../assets/234.jpg" lazyLoad></p-image>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap .p-image{\r
        margin-right: 10px;\r
    }\r
</style>`,r.__sourceCodeTitle="\u52A0\u8F7D\u5931\u8D25"}const k={class:"flex flex-1 wrap"},y=a({__name:"Image.Err.preview",setup(r){return(g,c)=>(s(),n("div",k,[t(e(p.exports.PImage),{fit:"contain",width:"200px",height:"200px",src:"../assets/234.jpg",lazyLoad:""})]))}});typeof h=="function"&&h(y);var E=m(y,[["__scopeId","data-v-207662b5"]]);function u(r){r.__sourceCode=`<script setup lang="ts">\r
import { PImage } from 'pui-vue-pxs'\r
import { getImageUrl } from '@/util'\r
<\/script>\r
\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-image fit="contain" width="200px" height="200px" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.baidu.com%2Fit%2Fu%3D3062469291%2C1117322059%26fm%3D253%26app%3D120%26f%3DJPEG%3Fw%3D1200%26h%3D800&refer=http%3A%2F%2Fimg2.baidu.com&app=2002&size=w300&q=a80&n=0&g=0n&fmt=jpeg?sec=1645325643&t=6ce71a1052649be26ad91d0de0e99ec6" lazyLoad></p-image>\r
        <p-image fit="cover" width="200px" height="200px" :src="getImageUrl('123.jpg')" lazyLoad></p-image>\r
        <p-image fit="none" width="200px" height="200px" :src="getImageUrl('123.jpg')" lazyLoad></p-image>\r
        <p-image fit="scale-down" width="200px" height="200px" :src="getImageUrl('234.jpg')" lazyLoad></p-image>\r
        <p-image fit="fit" width="200px" height="200px" :src="getImageUrl('123.jpg')" lazyLoad></p-image>\r
    </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .wrap .p-image{\r
        margin-right: 10px;\r
    }\r
</style>`,r.__sourceCodeTitle="\u56FE\u7247\u61D2\u52A0\u8F7D"}const T={class:"flex flex-1 wrap"},P=a({__name:"Image.LazyLoad.preview",setup(r){return(g,c)=>(s(),n("div",T,[t(e(p.exports.PImage),{fit:"contain",width:"200px",height:"200px",src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.baidu.com%2Fit%2Fu%3D3062469291%2C1117322059%26fm%3D253%26app%3D120%26f%3DJPEG%3Fw%3D1200%26h%3D800&refer=http%3A%2F%2Fimg2.baidu.com&app=2002&size=w300&q=a80&n=0&g=0n&fmt=jpeg?sec=1645325643&t=6ce71a1052649be26ad91d0de0e99ec6",lazyLoad:""}),t(e(p.exports.PImage),{fit:"cover",width:"200px",height:"200px",src:e(i)("123.jpg"),lazyLoad:""},null,8,["src"]),t(e(p.exports.PImage),{fit:"none",width:"200px",height:"200px",src:e(i)("123.jpg"),lazyLoad:""},null,8,["src"]),t(e(p.exports.PImage),{fit:"scale-down",width:"200px",height:"200px",src:e(i)("234.jpg"),lazyLoad:""},null,8,["src"]),t(e(p.exports.PImage),{fit:"fit",width:"200px",height:"200px",src:e(i)("123.jpg"),lazyLoad:""},null,8,["src"])]))}});typeof u=="function"&&u(P);var A=m(P,[["__scopeId","data-v-19636a6d"]]);const N=a({__name:"index",setup(r){return(g,c)=>(s(),n(L,null,[t(o,{component:f}),t(o,{component:b}),t(o,{component:$}),t(o,{component:C}),t(o,{component:E}),t(o,{component:A})],64))}});export{N as default};
