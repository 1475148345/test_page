<script setup lang="ts">
import {PTag} from '../../../lib'
import { useToast } from 'pui-vue-pxs/hooks'
const toast = useToast()
const click=()=>{
    toast({ message: '点击了标签' })
}
const close=()=>{
    toast({ message: '点击了关闭' })
}
</script>

<preview>显示关闭按钮</preview>
<template>
<div class="flex flex-w-w ai-c">
  <p-tag size="small" plain @click="click" @close="close" closable>标签</p-tag>
  <p-tag type="primary" size="small" plain closable>标签</p-tag>
  <p-tag type="danger" size="small" plain closable>标签</p-tag>
  <p-tag type="warning" size="small" plain closable>标签</p-tag>
  <p-tag type="info" size="small" plain closable>标签</p-tag>
</div>

</template>
