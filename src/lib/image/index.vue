<script setup lang="ts">
import { ref, watchEffect, nextTick, reactive, toRefs } from "vue";
import PIcon from "../icon/index.vue";
const props = defineProps({
    src: {
        type: String,
    },
    width: {
        type: String,
        default: "",
    },
    height: {
        type: String,
        default: "",
    },
    round: Boolean,
    radius: [String, Number],
    fit: {
        type: String,
        default: "fit", // contain、cover、fit、none、scale-down
    },
    lazyLoad: Boolean,
    lazyLoadParentNode: {
        // 懒加载父节点，默认#app
        type: String,
        default: "#app",
    },
    loadingIcon: {
        type: String,
        default: "icon-photo", // icon-photo 加载中占位图、可自定义
    },
    errorIcon: {
        type: String,
        default: "icon-photo-fail", // 加载失败、可自定义
    },
});
const { src, width, height, round, radius, fit, lazyLoad, loadingIcon, errorIcon } = props;
const dataMap = reactive({
    imgLoading: true,
    imgErr: false,
    imgSrc: "",
});

let { imgLoading, imgErr, imgSrc } = toRefs(dataMap);

const imgRef: any = ref("");

const methodsMap = {
    loadImg: (val: string) => {
        const img = new Image();
        img.src = val;

        imgSrc.value = val;
        img.onload = () => {
            imgLoading.value = false;
            imgErr.value = false;
        };
        img.onerror = () => {
            imgErr.value = true;
            imgLoading.value = false;
            console.warn("load error~");
        };
    },
    observeImage: (img: Element, val: string) => {
        const root = document.getElementById("#app");
        const options = {
            root: root,
            // 这里是一个数组可以指定多个比例类似[0.25, 0.5, 0.75, 1]
            threshold: [0], // 交会处
            rootMargin: "0px", // 对视口进行收缩和扩张
        };
        const lazyIntersection = new IntersectionObserver((entires) => {
            // entires为监听的节点数组对象
            entires.forEach((item: any) => {
                if (item.isIntersecting) {
                    // 是否可见
                    methodsMap.loadImg(val);
                    item.target.src = val;
                    // 这里资源加载后就停止进行观察
                    lazyIntersection.unobserve(item.target);
                }
            });
        }, options);
        lazyIntersection.observe(img);
    },
};

watchEffect(() => {
    if (src) {
        if (lazyLoad) {
            nextTick(() => {
                methodsMap.observeImage(imgRef.value, src);
            });
        } else {
            methodsMap.loadImg(src);
        }
    }
});
</script>
<template>
    <div
        class="p-image p-flex p-flex-jc-center p-flex-ai-center"
        ref="imgRef"
        :style="{ width, height, borderRadius: radius ? radius : round ? '50%' : '', backgroundColor: !imgLoading && !imgErr ? 'transparent' : '#e5e5e5' }"
    >
        <slot name="loadingIcon" v-if="imgLoading || !imgSrc">
            <p-icon :name="loadingIcon" size="30px" color="#999"></p-icon>
        </slot>
        <slot name="errorIcon" v-if="imgErr">
            <p-icon :name="errorIcon" size="30px" color="#999"></p-icon>
        </slot>
        <img v-if="imgSrc && !imgLoading && !imgErr" class="p-image--img" :src="imgSrc" v-bind="$attrs" :style="'object-fit:' + fit" />
    </div>
</template>
<script lang="ts">
export default {
    name: "p-image",
};
</script>
<style lang="scss" scoped>
// @import '../style/flex.scss';
.p-image {
    overflow: hidden;
}
.p-image--img,
.p-image--error,
.p-image--loading {
    width: 100%;
    height: 100%;
    img {
        display: block;
    }
}
</style>
