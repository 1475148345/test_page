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
<preview>自定义footer</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-button @click="click()">自定义footer</p-button>
        <p-dialog v-model:visible="visible" @confirm="confirm" @cancel="cancel">
            <p>自定义footer</p>
            <template #footer>
                <div class="p-dialog-footer p-flex p-flex-jc-end">
                    <p-button type="danger" size="small" icon="icon-add" iconColor="#fff">保存</p-button>
                </div>
            </template>
        </p-dialog>
    </div>
</template>


