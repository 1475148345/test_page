
<script setup lang="ts">
import { ref, toRef, watch, computed, PropType } from 'vue'
import PIcon from "../icon/index.vue";

import { MessageType, PositionType } from '../types/message'
import { COLORS } from '../enums/color'
import { ICONS } from '../enums/icon'

const props = defineProps({
    message: {
        type: [String, Number],
        default: '这是消息提示...'
    },
    type: {
        type:String as PropType<MessageType>,
        default: 'success'
    },
    forbidClick: Boolean, // 是否可点击背景
    duration: {
        type: Number,
        default: 2000
    },
    position: {
        type: String as PropType<PositionType>,
        default: 'top'
    },
})

const { forbidClick, duration, message, position, type } = props

const positionStyle = computed(() => {
    if (position === 'top') return 'top:20px;left:50%;transform: translate(-50%);'
    if (position === 'center') return 'top:50%;left:50%;transform: translate(-50%);'
    if (position === 'bottom') return 'top:90%;left:50%;transform: translate(-50%);'
    if (position === 'topRight') return 'top:20px;right:30px;'
    return position || 'top:50%;'
})

let visible = ref(false)
let timer: number | null
const methodsMap = {
    clickAction: () => {
        if (forbidClick) methodsMap.close()
    },
    clearTimer: (timer: number | null) => {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    },
    close: () => {
        visible.value = false
        methodsMap.clearTimer(timer)
    },
    show: () => {
        methodsMap.close()
        visible.value = true
        timer = window.setTimeout(() => {
            visible.value = false
            methodsMap.clearTimer(timer)
        }, duration)
    },
}

/**
 * watch
 */
const msg = toRef(props, 'message')
watch(msg, (val) => {
    if (val) methodsMap.show()
}, { immediate: true })

</script>
<template>
    <div class="p-message" v-if="visible">
        <div class="ceng" v-if="forbidClick"></div>
        <div class="content" :style="positionStyle" :class="'p-status--'+type">
            <p-icon :name="ICONS[type]" size="18px" :color="COLORS[type]"></p-icon>
            <span :style="'color:' + COLORS[type]">{{ message }}</span>
        </div>
    </div>
</template>
<style lang='scss'>
.p-status--success {
    background-color: #f0f9eb;
    border:1px solid #e1f3d8;
}
.p-status--warning {
    background-color: #fdf6ec;
    border:1px solid #faecd8;
}
.p-status--info {
    background-color: #edf2fc;
    border:1px solid #ebeef5;
}
.p-status--error {
    background-color: #fef0f0;
    border:1px solid #fde2e2;
}
.p-message {
    .ceng {
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 1;
    }
    .content {
        // left: 50%;
        top: 50%;
        // transform: translate(-50%);
        position: fixed;
        z-index: auto;
        border-radius: 5px;
        min-width: 380px;
        min-height: 48px;
        padding: 10px 15px;
        font-size: 14px;
        display: flex;
        align-items: center;
        .p-icon{
            margin-right: 5px;
        }
    }
}
</style>
