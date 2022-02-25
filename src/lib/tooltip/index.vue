
<script setup lang="ts">
import { onMounted, computed, reactive, PropType, ref, nextTick, watch } from 'vue'
import { TOOLTIP } from '../enums/position';
import { tooltipType } from '../types/position'
import { tooltipThemeType } from '../types/theme'
const props = defineProps({
    content:{
        type:String,
        default:'这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容'
    },
    placement:{
        type: String as PropType<tooltipType>, //top、bottom、right、left、auto
        default: 'auto'
    },
    isClickShow:Boolean,
    lineSize:{
        type:Number,
        default:30//每行字数
    },
    theme:{
        type: String as PropType<tooltipThemeType>,
        default:'dark'
    }
})
const { content, placement, isClickShow,lineSize } = props

const state = reactive({
    lineNumber:1,//行数
})

const position = ref('')
const isShow = ref(false)
const methodsMap={
    setPosition:()=>{
        const el:HTMLElement|null = document.querySelector('#tooltip')
        if(el){
            const {x,y,height} = el.getBoundingClientRect()
            //考虑边界情况
            if(x<10) position.value = `p-popover-${TOOLTIP.right}`
            if(y<10){
                el.style.marginTop = Math.abs(height)+10+'px'
            }else{
               placement==='top'  && (el.style.top = -height-10+'px')
            }
        }
    },
    autoPosition:()=>{
        position.value = `p-tooltip-${TOOLTIP.bottom}`
        if(placement!==TOOLTIP.auto){
            position.value = `p-tooltip-${placement}`
        }else{
            const el:HTMLElement|null = document.querySelector('#tooltip')
            if(el){
                const {x,y,bottom,top,left,right} = el.getBoundingClientRect()
                if(x<10)position.value = `p-tooltip-${TOOLTIP.right}`
                if(y<10) position.value = `p-tooltip-${TOOLTIP.bottom}`
                if(bottom>top) position.value = `p-tooltip-${TOOLTIP.top}`
                if(right>left) position.value = `p-tooltip-${TOOLTIP.left}`
            }
        }
        methodsMap.setPosition()
    },
    mouseover:()=>{
        if(isClickShow) return
        isShow.value = true
    },
    mouseout:()=>{
        if(isClickShow) return
        isShow.value = false
    },
    clickShow:()=>{
        if(!isClickShow) return
        isShow.value = !isShow.value
    }
}

watch(isShow,(val)=>{
    if(val) nextTick(()=>methodsMap.autoPosition())
})

const contentTitle = computed(()=>{
    const len = Math.ceil(content.length / lineSize)
    state.lineNumber = len
    if( len===1 ) return content
    let strArr = []
    for(let i=0;i<len;i++){
        strArr.push(content.substring(i*lineSize,(i+1)*lineSize) + (i===len?'':'<br/>'))
    }
    methodsMap.setPosition()
    return strArr.join('')
})

</script>
<template>
  <div class="p-tooltip">
    <div class="p-tooltip-content-dark" id="tooltip" :class="[position,'p-tooltip-content-'+theme]" v-html="contentTitle" v-if="isShow"></div>
    <div  @mouseover="methodsMap.mouseover" @mouseout="methodsMap.mouseout" @click="methodsMap.clickShow">
        <slot></slot>
    </div>
  </div>
</template>
<style lang='scss' scoped>
    .p-tooltip{
        position: relative;
        .p-tooltip-content-dark{
            position: absolute;
            padding: 8px 12px;
            min-width: 60px;
            max-width: 500px;
            white-space: nowrap;
            text-align: center;
            z-index: 222;
            border-radius: 4px;
            background-color: #333;
            color: #fff;
            font-size: 14px;
            &.p-tooltip-top{
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                &::after{
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-top: 6px solid #333;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                }
            }
            &.p-tooltip-bottom{
                bottom: -70px;
                left: 50%;
                transform: translateX(-50%);
                &::after{
                    content: '';
                    position: absolute;
                    top: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-bottom: 6px solid #333;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                }
            }
            &.p-tooltip-right{
                left: calc(100% + 10px);
                top: 50%;
                transform: translateY(-50%);
                &::after{
                    content: '';
                    position: absolute;
                    left: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-right: 6px solid #333;
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                }
            }
            &.p-tooltip-left{
                right: calc(100% + 10px);
                top: 50%;
                transform: translateY(-50%);
                &::after{
                    content: '';
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-left: 6px solid #333;
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                }
            }
        }
        .p-tooltip-content-light{
            background-color: #fff;
            color: #333;
            border: 1px solid #333;
            &.p-tooltip-top{
                &::before{
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-top: 7px solid #fff;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    z-index: 2;
                }
            }
            &.p-tooltip-bottom{
                &::before{
                    content: '';
                    position: absolute;
                    top: -5px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-bottom: 7px solid #fff;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    z-index: 2;
                }
            }
            &.p-tooltip-right{
                &::before{
                    content: '';
                    position: absolute;
                    left: -5px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-right: 7px solid #fff;
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;
                    z-index: 2;
                }
            }
            &.p-tooltip-left{
                &::before{
                    content: '';
                    position: absolute;
                    right: -5px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-left: 7px solid #fff;
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;
                    z-index: 2;
                }
            }
        }
    }
</style>
