<script setup lang="ts">
import { PButton } from 'pui-vue-pxs'
import { useMessage } from '@/lib/hooks'
import { MessagePropsType } from '@/lib/types/message'
const click = (params: MessagePropsType) => {
    const message = useMessage()
    message({ message: '文字提示', ...params })
}
</script>
<preview>提示位置</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-button @click="click({ duration: 55000 , message: '这是一段提示消息~',position:'top'})">top</p-button>
        <p-button @click="click({ duration: 55000 , message: '这是一段提示消息~',position:'center'})">center</p-button>
        <p-button @click="click({ duration: 55000 , message: '这是一段提示消息~',position:'bottom'})">bottom</p-button>
        <p-button @click="click({ duration: 55000 , message: '这是一段提示消息~',position:'topRight'})">topRight</p-button>
        <p-button @click="click({ duration: 55000 , message: '这是一段提示消息~',position:'top:30%;right:30px;'})">top:30px;right:30px;</p-button>
    </div>
</template>


