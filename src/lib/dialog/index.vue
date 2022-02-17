
<script setup lang="ts">
import { ref, watch, toRef } from 'vue'
import pIcon from '../icon/index.vue';
import pButton from '../button/index.vue';
const props = defineProps({
    forbidClick: Boolean, // 是否可点击背景
    visible: Boolean
})
const { forbidClick } = props

const emit = defineEmits(['update:visible','confirm','cancel'])

const dialogVisible = ref(false)

const methodsMap = {
    close: () => {
        emit('update:visible', false)
    },
    show: () => {
        dialogVisible.value=true
    },
    submit:()=>{
        emit('confirm')
    },
    cancel:()=>{
        emit('cancel')
        methodsMap.close()
    }
}
/**
 * watch
 */
const propVisible = toRef(props, 'visible')
watch(propVisible, (val) => {
    dialogVisible.value = val
}, { immediate: true })
</script>
<template>
    <div class="p-dialog" v-if="dialogVisible">
        <div class="ceng" @click="!forbidClick && methodsMap.close()"></div>
        <div class="content">
            <div class="p-dialog-header p-flex p-flex-ai-center">
                <span class="p-flex-1 title">提示</span>
                <p-icon name="icon-close" size="26px" @click="methodsMap.close()"></p-icon>
            </div>
            <div class="p-dialog-body">
                <slot>内容</slot>
            </div>
            <div class="p-dialog-footer p-flex p-flex-jc-end">
                <p-button plain size="small" @click="methodsMap.cancel()">取消</p-button>
                <p-button type="info" size="small" @click="methodsMap.submit()">确定</p-button>
            </div>
        </div>
    </div>
</template>
<style lang='scss'>
@import '../style/base.scss';
.p-dialog {
    .ceng {
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: auto;
    }
    .content {
        left: 50%;
        top: 15vh;
        transform: translateX(-50%);
        position: fixed;
        z-index: auto;
        background-color: #fff;
        border-radius: 5px;
        color: #fff;
        width: 50%;
        padding:15px 20px;
        font-size: 14px;
    }
}
.p-dialog-header{
    .title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
    }
    .p-icon{
        color: #909399;
        cursor: pointer;
        &:hover{
            color: $blue;
        }
    }
}
.p-dialog-body{
    padding: 10px 0;
}
</style>
