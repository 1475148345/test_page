import{p as l}from"./pui.f60918a2.js";import{c as p}from"./index.f9bfa2ba.js";import{f as r,c,F as h,aR as g,u as e,o,b as f,a as _,t as m,_ as d,k as x}from"./index.22c67b89.js";import{P as z}from"./Preview.992ce5c2.js";import"./index.adffe6dd.js";var y={iconError:"icon-error",iconWarning:"icon-warning",iconInfo:"icon-info",iconSuccess:"icon-success-filling",iconRight:"icon-right",iconEmoji:"icon-emoji",iconAdd:"icon-add",iconPhoto:"icon-photo",iconPhotoFail:"icon-photo-fail",iconClose:"icon-close",iconZhongzuo:"icon-zhongzuo",iconOssziyuanbeifen:"icon-ossziyuanbeifen",iconBendisucaibeifen:"icon-bendisucaibeifen",iconSousuo:"icon-sousuo",iconFangda:"icon-fangda",iconsuoxiao:"icon-suoxiao",iconbianzu2:"icon-bianzu2",iconbiaojibeifen:"icon-biaojibeifen",iconbianzu4:"icon-bianzu4",iconchuangjianzhinengfenxirenwu:"icon-chuangjianzhinengfenxirenwu",iconjianqie:"icon-jianqie",iconbianji:"icon-bianji",icontianjia:"icon-tianjia",iconshanchu:"icon-shanchu",iconwangyeloading:"icon-wangye-loading",iconchehui:"icon-chehui",iconFullScreen:"icon-full-screen",iconFullScreenOut:"icon-full-screen-out",iconwenben:"icon-wenben",iconxiazai:"icon-xiazai",iconzanting:"icon-zanting",iconzhankai:"icon-zhankai",iconzuihouyigeshipin:"icon-zuihouyigeshipin",iconOssziyuan:"icon-ossziyuan",iconCheckboxCircleFill:"icon-checkbox-circle-fill",iconKuaijin:"icon-kuaijin",iconhoutui:"icon-houtui",icondiyigeshipin:"icon-diyigeshipin",iconBendisucai:"icon-bendisucai",icontishi2:"icon-tishi2",iconluzhi:"icon-luzhi",iconkaishi:"icon-kaishi",iconshangchuan:"icon-shangchuan",iconshouquanchenggong:"icon-shouquanchenggong",icontishi:"icon-tishi",iconwushouquan:"icon-wushouquan",iconxingzhuang:"icon-xingzhuang",iconZoomOut:"icon-zoom-out",iconZoomIn:"icon-room-in",iconCloseCircle:"icon-close-circle",iconEye:"icon-eye",iconEyeClose:"icon-eye-close"};function a(n){n.__sourceCode=`<script setup lang="ts">\r
import { PIcon } from 'pui-vue-pxs'\r
import icons from 'pui-vue-pxs/icon/icon'\r
import {copyText} from'@/util'\r
\r
<\/script>\r
\r
\r
<template>\r
  <ul class="list">\r
      <li v-for="item in icons" :key="item" @click="copyText(item)">\r
          <p-icon :name="item" size="26px"></p-icon>\r
          <span>{{item}}</span>\r
      </li>\r
  </ul>\r
</template>\r
\r
<style lang="scss" scoped>\r
    .list{\r
        display: flex;\r
        flex-wrap: wrap;\r
        margin: 0 auto;\r
        li{\r
            width: 125px;\r
            height: 125px;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            flex-direction: column;\r
            padding: 5px;\r
            border: 1px solid #e5e5e5;\r
            text-align: center;\r
            span{\r
                margin-top: 10px;\r
                word-break: break-all;\r
                font-size: 13px;\r
            }\r
        }\r
    }\r
</style>`,n.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"}const b={class:"list"},k=["onClick"],s=r({__name:"Button.icon.preview",setup(n){return(t,u)=>(o(),c("ul",b,[(o(!0),c(h,null,g(e(y),i=>(o(),c("li",{key:i,onClick:j=>e(p)(i)},[f(e(l.exports.PIcon),{name:i,size:"26px"},null,8,["name"]),_("span",null,m(i),1)],8,k))),128))]))}});typeof a=="function"&&a(s);var w=d(s,[["__scopeId","data-v-456207e3"]]);const q=r({__name:"index",setup(n){return(t,u)=>(o(),x(z,{component:w}))}});export{q as default};
