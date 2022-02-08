<script setup lang="ts">
import { PButton } from 'pui-vue-pxs'
import { useMessage } from '@/lib/hooks'
const click = (params: any) => {
    const message = useMessage()
    message({ message: '文字提示', ...params })
}
</script>
<preview>基础示例</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-button type="primary" @click="click({ duration: 3000 , message: '这是一段提示消息~'})">成功提示</p-button>
        <p-button type="warning" @click="click({ duration: 3000 , message: '这是一段提示消息~',type:'warning'})">警告提示</p-button>
        <p-button type="default" @click="click({ duration: 3000 , message: '这是一段提示消息~',type:'info'})">普通提示</p-button>
        <p-button type="danger" @click="click({ duration: 3000 , message: '这是一段提示消息~',type:'error'})">失败提示</p-button>
    </div>
</template>


