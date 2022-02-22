<script setup lang="ts">
import { PButton, PDialog } from '../../../lib'
import { ref } from 'vue';
import { useToast } from 'pui-vue-pxs/hooks/useToast';
const toast = useToast()
const visible = ref(false)
const visibleSub = ref(false)
const click = () => {
    visible.value = true
}
const clickSub = () => {
    visibleSub.value = true
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
        <p-dialog v-model:visible="visible" @confirm="confirm" @cancel="cancel">
            <div>这是弹窗内容，这是弹窗内容，这是弹窗内容</div>
            <p-button @click="clickSub()" style="margin-top: 10px;">打开另一个弹窗</p-button>
        </p-dialog>
        <p-dialog v-model:visible="visibleSub">这是弹窗内容，这是弹窗内容，这是弹窗内容</p-dialog>
    </div>
</template>


