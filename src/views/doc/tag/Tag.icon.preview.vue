<script setup lang="ts">
import { PTag, PIcon } from 'pui-vue-pxs'
const click=()=>{
  console.log(11);
}
</script>

<preview>带图标</preview>
<template>
  <div class="flex flex-w-w ai-c">
    <p-tag @itemAction="click" icon='icon-emoji'>icon-emoji</p-tag>
    <p-tag type="primary">
      <template #icon>
        <p-icon name="icon-sousuo" size="16px" color="#fff"></p-icon>
      </template>
      icon-sousuo
    </p-tag>
    <p-tag type="info" icon='icon-add' iconColor="#fff">icon-add</p-tag>
    <p-tag type="danger" icon='icon-shanchu' iconColor='#fff'>icon-shanchu</p-tag>
    <p-tag type="warning" icon='icon-fangdazhanshi' iconColor='#fff'>icon-fangdazhanshi</p-tag>
  </div>
</template>

