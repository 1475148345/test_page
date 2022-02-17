<script setup lang="ts">
import { PButton } from 'pui-vue-pxs'
import { PDialog } from '../../../lib';
import { ref } from 'vue';
import { useToast } from 'pui-vue-pxs/hooks/useToast';
const toast = useToast()
const visible = ref(false)
const click = () => {
    visible.value = true
}
const confirm=()=>{
    toast({ message: '点击了确认按钮' })
}
const cancel=()=>{
    toast({ message: '点击了取消按钮' })
}
</script>
<preview>基本用法</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-button @click="click()">显示弹窗</p-button>
        <p-dialog v-model:visible="visible" @confirm="confirm" @cancel="cancel">这是弹窗内容，这是弹窗内容，这是弹窗内容</p-dialog>
    </div>
</template>


