<script setup lang="ts">
import { PButton } from 'pui-vue-pxs'
import { useToast } from 'pui-vue-pxs/hooks'
const click = (params: any) => {
    const toast = useToast()
    toast({ message: '文字提示', ...params })
}
</script>
<preview>基础示例</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-button @click="click">文字提示</p-button>
        <p-button @click="click({ loading: true, message: '加载中...' })">加载中</p-button>
        <p-button @click="click({ forbidClick: true,message: '背景不可点击' })">背景不可点击</p-button>
        <p-button @click="click({ duration: 5000 , message: '5s后关闭'})">5s后关闭</p-button>
    </div>
</template>


