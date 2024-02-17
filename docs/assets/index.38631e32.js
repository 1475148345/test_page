import{p as t,P as c}from"./Preview.b55bc7bb.js";import{f as a,c as f,b as e,w as o,u as n,F as _,o as p,d as s,a6 as y,a as l}from"./index.f11d68f1.js";function d(r){r.__sourceCode=`<script setup lang="ts">\r
import { PRow, PCol } from 'pui-vue-pxs'\r
<\/script>\r
\r
<template>\r
  <PRow>\r
    <PCol>span24</PCol>\r
  </PRow>\r
  <PRow>\r
    <PCol :span="8">span8</PCol>\r
    <PCol :span="8">span8</PCol>\r
    <PCol :span="8">span8</PCol>\r
  </PRow>\r
  <PRow>\r
    <PCol :span="12">span12</PCol>\r
    <PCol :span="8" :offset="4">span8,offset4</PCol>\r
  </PRow>\r
</template>`,r.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const x=a({__name:"Layout.preview",setup(r){return(u,P)=>(p(),f(_,null,[e(n(t.exports.PRow),null,{default:o(()=>[e(n(t.exports.PCol),null,{default:o(()=>[s("span24")]),_:1})]),_:1}),e(n(t.exports.PRow),null,{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("span8")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("span8")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("span8")]),_:1})]),_:1}),e(n(t.exports.PRow),null,{default:o(()=>[e(n(t.exports.PCol),{span:12},{default:o(()=>[s("span12")]),_:1}),e(n(t.exports.PCol),{span:8,offset:4},{default:o(()=>[s("span8,offset4")]),_:1})]),_:1})],64))}});typeof d=="function"&&d(x);function i(r){r.__sourceCode=`<script setup lang="ts">\r
import { PRow, PCol } from 'pui-vue-pxs'\r
<\/script>\r
\r
<template>\r
  <PRow :gutter="5">\r
    <PCol :span="8">span8</PCol>\r
    <PCol :span="8">span8</PCol>\r
    <PCol :span="8">span8</PCol>\r
  </PRow>\r
</template>`,r.__sourceCodeTitle="\u5217\u5143\u7D20\u589E\u52A0\u95F4\u8DDD"}const w=a({__name:"Layout.gutter.preview",setup(r){return(u,P)=>(p(),y(n(t.exports.PRow),{gutter:5},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("span8")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("span8")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("span8")]),_:1})]),_:1}))}});typeof i=="function"&&i(w);function C(r){r.__sourceCode=`<script setup lang="ts">\r
  import { PRow, PCol } from 'pui-vue-pxs'\r
<\/script>\r
\r
<template>\r
    <h3 class="view-title">flex\u5E03\u5C40:\u4E3B\u8F74</h3>\r
    <PRow :gutter="5" type='flex'>\r
      <PCol :span="8">\u9ED8\u8BA4</PCol>\r
      <PCol :span="8">\u9ED8\u8BA4</PCol>\r
    </PRow>\r
    <PRow :gutter="5" type='flex' justify="center">\r
      <PCol :span="8">center</PCol>\r
      <PCol :span="8">center</PCol>\r
    </PRow>\r
    <PRow :gutter="5" type='flex' justify="end">\r
      <PCol :span="8">end</PCol>\r
      <PCol :span="8">end</PCol>\r
    </PRow>\r
    <PRow :gutter="5" type='flex' justify="space-around">\r
      <PCol :span="8">space-around</PCol>\r
      <PCol :span="8">space-around</PCol>\r
    </PRow>\r
    <PRow :gutter="5" type='flex' justify="space-between">\r
      <PCol :span="8">space-between</PCol>\r
      <PCol :span="8">space-between</PCol>\r
    </PRow>\r
\r
    <h3 class="view-title">flex\u5E03\u5C40:\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F</h3>\r
    <div class="container" style="border:1px dashed #ccc;height:80px;">\r
      <PRow :gutter="5" type='flex'>\r
        <PCol :span="8">\u9ED8\u8BA4</PCol>\r
        <PCol :span="8">\u9ED8\u8BA4</PCol>\r
      </PRow>\r
    </div>\r
    <div class="container" style="border:1px dashed #ccc;height:80px;">\r
      <PRow :gutter="5" type='flex' align="center">\r
        <PCol :span="8">\u9ED8\u8BA4</PCol>\r
        <PCol :span="8">\u9ED8\u8BA4</PCol>\r
      </PRow>\r
    </div>\r
    <div class="container" style="border:1px dashed #ccc;height:80px;">\r
      <PRow :gutter="5" type='flex' align="bottom">\r
        <PCol :span="8">\u9ED8\u8BA4</PCol>\r
        <PCol :span="8">\u9ED8\u8BA4</PCol>\r
      </PRow>\r
    </div>\r
</template>`,r.__sourceCodeTitle="flex\u5E03\u5C40"}const g=l("h3",{class:"view-title"},"flex\u5E03\u5C40:\u4E3B\u8F74",-1),h=l("h3",{class:"view-title"},"flex\u5E03\u5C40:\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F",-1),m={class:"container",style:{border:"1px dashed #ccc",height:"80px"}},v={class:"container",style:{border:"1px dashed #ccc",height:"80px"}},b={class:"container",style:{border:"1px dashed #ccc",height:"80px"}},R=a({__name:"Layout.flex.preview",setup(r){return(u,P)=>(p(),f(_,null,[g,e(n(t.exports.PRow),{gutter:5,type:"flex"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1})]),_:1}),e(n(t.exports.PRow),{gutter:5,type:"flex",justify:"center"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("center")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("center")]),_:1})]),_:1}),e(n(t.exports.PRow),{gutter:5,type:"flex",justify:"end"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("end")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("end")]),_:1})]),_:1}),e(n(t.exports.PRow),{gutter:5,type:"flex",justify:"space-around"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("space-around")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("space-around")]),_:1})]),_:1}),e(n(t.exports.PRow),{gutter:5,type:"flex",justify:"space-between"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("space-between")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("space-between")]),_:1})]),_:1}),h,l("div",m,[e(n(t.exports.PRow),{gutter:5,type:"flex"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1})]),_:1})]),l("div",v,[e(n(t.exports.PRow),{gutter:5,type:"flex",align:"center"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1})]),_:1})]),l("div",b,[e(n(t.exports.PRow),{gutter:5,type:"flex",align:"bottom"},{default:o(()=>[e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1}),e(n(t.exports.PCol),{span:8},{default:o(()=>[s("\u9ED8\u8BA4")]),_:1})]),_:1})])],64))}});typeof C=="function"&&C(R);const A=a({__name:"index",setup(r){return(u,P)=>(p(),f(_,null,[e(c,{component:x}),e(c,{component:w}),e(c,{component:R})],64))}});export{A as default};
