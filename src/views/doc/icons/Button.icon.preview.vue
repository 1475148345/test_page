<script setup lang="ts">
import { PIcon } from 'pui-vue-pxs'
import icons from 'pui-vue-pxs/icon/icon'
console.log(icons)
import {copyText} from'@/util'
</script>

<preview>基础示例</preview>
<template>
  <ul class="list">
      <li v-for="item in icons" :key="item" @click="copyText(item)">
          <p-icon :name="item"></p-icon>
          <span>{{item}}</span>
      </li>
  </ul>
</template>

<style lang="scss" scoped>
    .list{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 130px;
            height: 130px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 5px;
            border: 1px solid #e5e5e5;
            text-align: center;
            span{
                margin-top: 10px;
                word-break: break-all;
                font-size: 13px;
            }
        }
    }
</style>

