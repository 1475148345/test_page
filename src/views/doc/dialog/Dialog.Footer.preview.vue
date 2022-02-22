<script setup lang="ts">
import { PButton,PDialog } from 'pui-vue-pxs'
import { ref } from 'vue';
import { useToast } from 'pui-vue-pxs/hooks/useToast';
const toast = useToast()
const visible = ref(false)
const visibleFullscreen = ref(false)
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
<preview>自定义footer</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-button @click="click()">自定义footer</p-button>
        <p-dialog v-model:visible="visible" @confirm="confirm" @cancel="cancel" width="600px">
            <p>自定义footer</p>
            <template #footer>
                <div class="p-dialog-footer p-flex p-flex-jc-end">
                    <p-button type="warning" size="small" icon="icon-add" iconColor="#fff">保存</p-button>
                </div>
            </template>
        </p-dialog>
        <p-button @click="visibleFullscreen=true">打开全屏弹窗</p-button>
        <p-dialog v-model:visible="visibleFullscreen" fullscreen>
            <p>这是一个全屏弹窗</p>
        </p-dialog>
    </div>
</template>


