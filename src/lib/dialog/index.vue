<script setup lang="ts">
import { ref, watch, toRef, computed } from "vue";
import pIcon from "../icon/index.vue";
import pButton from "../button/index.vue";
import { useDrag } from "../hooks/useDrag";
const props = defineProps({
    forbidClick: Boolean, // 是否可点击背景
    visible: Boolean,
    fullscreen: Boolean, //是否全屏
    footer: {
        type: Boolean,
        default: true,
    },
    width: {
        type: String,
        default: "50%",
    },
    title: {
        type: String,
        default: "提示",
    },
});
const { forbidClick, title, width, fullscreen } = props;

const emit = defineEmits(["update:visible", "confirm", "cancel"]);
const dialogVisible = ref(false);
const isFullscreen = ref(false);
const methodsMap = {
    close: () => {
        emit("update:visible", false);
    },
    show: () => {
        dialogVisible.value = true;
    },
    submit: () => {
        emit("confirm");
    },
    cancel: () => {
        emit("cancel");
        methodsMap.close();
    },
    zoom: () => {
        isFullscreen.value = true;
    },
    zoomOut: () => {
        isFullscreen.value = false;
    },
};
/**
 * watch
 */
const propVisible = toRef(props, "visible");
let drag = { remove: () => {} };
watch(
    [propVisible, isFullscreen],
    ([visible, isFull]) => {
        dialogVisible.value = visible;
        if (visible && !isFull) {
            drag = useDrag(".dialog-content");
        } else {
            drag.remove();
        }
    },
    { immediate: true }
);

const bodyStyle = computed(() => {
    if (fullscreen || isFullscreen.value) return "width:100%;height:100%;top:0;";
    if (width) return `width:${width};`;
});
</script>
<template>
    <div class="p-dialog" v-if="dialogVisible">
        <div class="ceng" @click="!forbidClick && methodsMap.close()"></div>
        <div class="content dialog-content" :style="bodyStyle">
            <div class="p-dialog-header p-flex p-flex-ai-center">
                <span class="p-flex-1 title">{{ title }}</span>
                <span v-if="isFullscreen" title="退出全屏"><p-icon name="icon-full-screen-out" size="20px" @click="methodsMap.zoomOut()"></p-icon></span>
                <span v-else title="全屏显示"><p-icon name="icon-full-screen" size="20px" @click="methodsMap.zoom()"></p-icon></span>
                <span title="关闭"><p-icon name="icon-close" size="34px" @click="methodsMap.close()"></p-icon></span>
            </div>
            <div class="p-dialog-body">
                <slot>内容</slot>
            </div>

            <slot name="footer" v-if="footer">
                <div class="p-dialog-footer p-flex p-flex-jc-end">
                    <p-button plain size="small" @click="methodsMap.cancel()">取消</p-button>
                    <p-button type="info" size="small" @click="methodsMap.submit()">确定</p-button>
                </div>
            </slot>
        </div>
    </div>
</template>
<style lang="scss">
// @import '../style/base.scss';
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
        padding: 15px 20px;
        font-size: 14px;
    }
}
.p-dialog-body {
    height: 100%;
    overflow: auto;
}
.p-dialog-header {
    cursor: move;
    .title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
    }
    .p-icon {
        color: #909399;
        cursor: pointer;
        &:hover {
            color: $blue;
        }
    }
}
.p-dialog-body {
    padding: 10px 0;
}
</style>
