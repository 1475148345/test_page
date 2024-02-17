<script setup lang="ts">
import { computed, onMounted, PropType, ref } from "vue";
import { COLORS } from "../enums/color";
import { ProgressPositionType, MessageType, ShapeType } from "../types";
const props = defineProps({
    outerWidth: {
        type: String,
        default: "350px",
    },
    percentage: {
        type: Number,
        default: 50,
    },
    color: {
        type: String as PropType<MessageType>,
        default: "success", //success、warning、info、error
    },
    bgColor: String, //#f8f8f8 设置了背景色color属性无效
    titlePosition: {
        type: String as PropType<ProgressPositionType>,
        default: "right",
    }, //标题是否在前
    showTitle: {
        //是否显示进度条标题
        type: Boolean,
        default: true,
    },
    height: {
        type: Number,
        default: 6,
    },
    type: {
        type: String as PropType<ShapeType>,
        default: "line", //line、circle
    },
    circleWidth: {
        type: Number,
        default: 200,
    },
    strokeWidth: {
        type: Number,
        default: 4,
    },
});
const { percentage, outerWidth, color, bgColor, height, titlePosition, type, circleWidth, strokeWidth } = props;
const style = computed(() => {
    return `width:${percentage}%;background-color:${bgColor || COLORS[color]};height:${height}px;border-radius:${height}px;line-height:${height}px;`;
});

const outStyle = computed(() => {
    return `width:${outerWidth}%;height:${height}px;border-radius:${height}px;`;
});
const svgStyle = computed(() => {
    return `width:${circleWidth}px;height:${circleWidth}px;`;
});

const circle = ref(),
    circleOuter = ref();
let progress = ref(0),
    _timer: number | undefined;
onMounted(() => {
    if (type === "circle" && circle.value) {
        const totalLength = circleOuter.value.getTotalLength();
        circle.value.style.stroke = COLORS[color];
        circle.value.style.strokeWidth = strokeWidth;
        circle.value.style.strokeDasharray = `0 ${totalLength}`;
        let len = 0;
        _timer = setInterval(() => {
            len++;
            if ((len / totalLength) * 100 >= percentage) clearInterval(_timer);
            circle.value.style.strokeDasharray = `${len} ${totalLength}`;
            const num = (len / totalLength) * 100 + "";
            progress.value = num.indexOf(".") > -1 ? Number(num.split(".")[0]) : Number(num);
        });
    }
});
</script>
<template>
    <div class="p-progress p-flex p-flex-ai-center" v-if="type === 'line'">
        <slot v-if="titlePosition === 'left' && showTitle"
            ><span class="p-progress-title" style="margin-right: 10px">{{ percentage }}%</span></slot
        >
        <div class="p-progress-outer" :style="outStyle">
            <div class="p-progress-bg" :style="style" v-if="titlePosition === 'center' && percentage > 0">{{ percentage }}%</div>
            <div class="p-progress-bg" :style="style" v-if="titlePosition !== 'center' && percentage > 0"></div>
        </div>
        <slot v-if="titlePosition === 'right' && showTitle"
            ><span class="p-progress-title" style="margin-left: 10px">{{ percentage }}%</span></slot
        >
    </div>

    <div class="p-svg" v-else :style="svgStyle">
        <svg class="svg">
            <circle cx="50%" cy="50%" :r="circleWidth / 2 - strokeWidth / 2 + 'px'" ref="circleOuter"></circle>
            <circle cx="50%" cy="50%" :r="circleWidth / 2 - strokeWidth / 2 + 'px'" class="bg-circle" ref="circle"></circle>
        </svg>
        <span class="title">{{ progress }}%</span>
    </div>
</template>
<script lang="ts">
export default {
    name: "pProgress",
};
</script>
<style scoped lang="scss">
// @import '../style/base.scss';
.p-progress-outer {
    width: 350px;
    background-color: $gray-4;
    height: 6px;
    border-radius: 50%;
    overflow: hidden;
    .p-progress-bg {
        transition: all 0.5s ease-in;
        background-color: $blue;
        height: 6px;
        border-radius: 50%;
        text-align: right;
        padding-right: 10px;
        color: #fff;
    }
}
.p-progress-title {
    color: #666;
    width: 30px;
}

.p-svg {
    width: 220px;
    height: 220px;
    position: relative;
    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        color: #333;
        font-size: 18px;
    }
}
.svg {
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    circle {
        fill: none;
        stroke: #e5e5e5;
        stroke-width: 4px;
    }
    .bg-circle {
        stroke: burlywood;
        stroke-dasharray: 220px;
        stroke-dashoffset: 0;
        stroke-linecap: round;
    }
}
</style>
