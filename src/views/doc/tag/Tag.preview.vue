<script setup lang="ts">
import { PTag } from 'pui-vue-pxs'
const click=():void=>{
  console.log(11);
}
</script>

<preview>基础示例</preview>
<template>
  <div class="flex flex-w-w ai-c">
    <p-tag @itemAction="click">default</p-tag>
    <p-tag type="primary" @itemAction="click">primary</p-tag>
    <p-tag type="info">info</p-tag>
    <p-tag type="danger">danger</p-tag>
    <p-tag type="warning">warning</p-tag>
  </div>
</template>

<style>

</style>
