import{p as i,P as f}from"./Preview.b55bc7bb.js";import{_ as v}from"./index.242196a0.js";import{b as u,bp as A,f as l,c as d,w as r,u as p,o as g,d as a,F as w}from"./index.f11d68f1.js";const _={items:new Map,add:function(s,e){this.items.set("pMessage"+s,e);let n,t=(this.items.size-1)*60;const o=e.children[0].children[0],c=this;function m(){t+=3,o.style.top=t+"px",t<(c.items.size<2?20:c.items.size*60-40)?n=requestAnimationFrame(m):window.cancelAnimationFrame(n)}n=requestAnimationFrame(m)},remove:function(s,e){let n,t=60;const o=e.children[0].children[0],c=this;function m(){if(t-=5,o.style.top=t+"px",t>-60)n=requestAnimationFrame(m);else{window.cancelAnimationFrame(n),document.body.removeChild(e);let b="pMessage"+s;c.items.delete(b),c.resetPostion()}}n=requestAnimationFrame(m)},resetPostion:function(){for(const[,s]of this.items){let e=s.children[0].children[0].style.top.split("px")[0];s.children[0].children[0].style.top=e-60+"px"}}};let x=0;function y(){return function(e){const n=document.createElement("div"),t=u(v,e);document.body.appendChild(n),A(t,n),x++,function(o){_.add(o,n);let c="_timer"+o;c=setTimeout(()=>{_.remove(o,n),clearTimeout(c)},e.duration||2e3)}(x)}}function k(s){s.__sourceCode=`<script setup lang="ts">\r
import { PButton } from 'pui-vue-pxs'\r
import { useMessage } from '@/lib/hooks'\r
const click = (params: any) => {\r
    const message = useMessage()\r
    message({ message: '\u6587\u5B57\u63D0\u793A', ...params })\r
}\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-button type="primary" @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~'})">\u6210\u529F\u63D0\u793A</p-button>\r
        <p-button type="warning" @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',type:'warning'})">\u8B66\u544A\u63D0\u793A</p-button>\r
        <p-button type="default" @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',type:'info'})">\u666E\u901A\u63D0\u793A</p-button>\r
        <p-button type="danger" @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',type:'error'})">\u5931\u8D25\u63D0\u793A</p-button>\r
    </div>\r
</template>`,s.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const h={class:"flex flex-1 wrap"},B=l({__name:"Message.preview",setup(s){const e=n=>{y()({message:"\u6587\u5B57\u63D0\u793A",...n})};return(n,t)=>(g(),d("div",h,[u(p(i.exports.PButton),{type:"primary",onClick:t[0]||(t[0]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~"}))},{default:r(()=>[a("\u6210\u529F\u63D0\u793A")]),_:1}),u(p(i.exports.PButton),{type:"warning",onClick:t[1]||(t[1]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",type:"warning"}))},{default:r(()=>[a("\u8B66\u544A\u63D0\u793A")]),_:1}),u(p(i.exports.PButton),{type:"default",onClick:t[2]||(t[2]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",type:"info"}))},{default:r(()=>[a("\u666E\u901A\u63D0\u793A")]),_:1}),u(p(i.exports.PButton),{type:"danger",onClick:t[3]||(t[3]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",type:"error"}))},{default:r(()=>[a("\u5931\u8D25\u63D0\u793A")]),_:1})]))}});typeof k=="function"&&k(B);function F(s){s.__sourceCode=`<script setup lang="ts">\r
import { PButton } from 'pui-vue-pxs'\r
import { useMessage } from '@/lib/hooks'\r
import { MessagePropsType } from '@/lib/types/message'\r
const click = (params: MessagePropsType) => {\r
    const message = useMessage()\r
    message({ message: '\u6587\u5B57\u63D0\u793A', ...params })\r
}\r
<\/script>\r
\r
<template>\r
    <div class="flex flex-1 wrap">\r
        <p-button type="warning" @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',position:'top'})">top</p-button>\r
        <p-button @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',position:'center'})">center</p-button>\r
        <p-button @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',position:'bottom'})">bottom</p-button>\r
        <p-button @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',position:'topRight'})">topRight</p-button>\r
        <p-button @click="click({ duration: 3000 , message: '\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~',position:'top:30%;right:30px;'})">top:30px;right:30px;</p-button>\r
    </div>\r
</template>`,s.__sourceCodeTitle="\u63D0\u793A\u4F4D\u7F6E"}const P={class:"flex flex-1 wrap"},D=l({__name:"Message.position.preview",setup(s){const e=n=>{y()({message:"\u6587\u5B57\u63D0\u793A",...n})};return(n,t)=>(g(),d("div",P,[u(p(i.exports.PButton),{type:"warning",onClick:t[0]||(t[0]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",position:"top"}))},{default:r(()=>[a("top")]),_:1}),u(p(i.exports.PButton),{onClick:t[1]||(t[1]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",position:"center"}))},{default:r(()=>[a("center")]),_:1}),u(p(i.exports.PButton),{onClick:t[2]||(t[2]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",position:"bottom"}))},{default:r(()=>[a("bottom")]),_:1}),u(p(i.exports.PButton),{onClick:t[3]||(t[3]=o=>e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",position:"topRight"}))},{default:r(()=>[a("topRight")]),_:1}),u(p(i.exports.PButton),{onClick:t[4]||(t[4]=o=>{e({duration:3e3,message:"\u8FD9\u662F\u4E00\u6BB5\u63D0\u793A\u6D88\u606F~",position:"top:30%;right:30px;"})})},{default:r(()=>[a("top:30px;right:30px;")]),_:1})]))}});typeof F=="function"&&F(D);const M=l({__name:"index",setup(s){return(e,n)=>(g(),d(w,null,[u(f,{component:B}),u(f,{component:D})],64))}});export{M as default};
