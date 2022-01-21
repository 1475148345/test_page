<script setup lang="ts">
import { PButton } from 'pui-vue-pxs'
import { useToast } from 'pui-vue-pxs/hooks'
const click = (params: any) => {
    const toast = useToast()
    toast({ message: '文字提示', ...params })
}
</script>
<preview>提示位置</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-button @click="click({position:'top'})">顶部提示top</p-button>
        <p-button @click="click({position:'bottom'})">底部提示bottom</p-button>
        <p-button @click="click({position:'20px'})">顶部20px</p-button>
    </div>
</template>


