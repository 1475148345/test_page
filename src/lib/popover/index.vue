
<script setup lang="ts">
import { computed, reactive, PropType, ref, nextTick, watch, toRef } from 'vue'
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
        default:19//每行字数
    },
    theme:{
        type: String as PropType<tooltipThemeType>,
        default:'light'
    },
    visible: Boolean
})
const { content, placement, isClickShow,lineSize } = props

const emit = defineEmits(['update:visible'])
const state = reactive({
    lineNumber:1,//行数
})

const position = ref('')
const isShow = toRef(props,'visible')
const noModel = ref(false)
const methodsMap={
    setPosition:()=>{
        const el:HTMLElement|null = document.querySelector('#tooltip')
        if(el){
            const {x,y,height} = el.getBoundingClientRect()
            //考虑边界情况
            if(x<10) position.value = `p-tooltip-${TOOLTIP.right}`
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
            methodsMap.setPosition()
        }else{
            const el:HTMLElement|null = document.querySelector('#tooltip')
            if(el){
                const {x,y,bottom,top,left,right} = el.getBoundingClientRect()
                if(x<10) position.value = `p-tooltip-${TOOLTIP.right}`
                if(y<10) position.value = `p-tooltip-${TOOLTIP.bottom}`
                if(bottom>top) position.value = `p-tooltip-${TOOLTIP.top}`
                if(right>left) position.value = `p-tooltip-${TOOLTIP.left}`
            }
        }

    },
    mouseover:()=>{
        if(isClickShow) return
        emit('update:visible',true)
        noModel.value = true
    },
    mouseout:()=>{
        if(isClickShow) return
        emit('update:visible',false)
        noModel.value = false
    },
    clickShow:()=>{
        if(!isClickShow) return
        emit('update:visible',!isShow.value)
        noModel.value = !noModel.value
    }
}

watch(isShow,(val)=>{
    if(val) nextTick(()=>methodsMap.autoPosition())
})
watch(noModel,(val)=>{
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
    <div class="p-tooltip-content-dark" id="tooltip" :class="[position,'p-tooltip-content-'+theme]" v-if="isShow || noModel">
        <slot name="content"><div v-html="contentTitle"></div></slot>
    </div>
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
            width: 300px;
            word-break: break-all;
            z-index: 222;
            border-radius: 4px;
            background-color: #333;
            color: #fff;
            line-height: 1.2;
            font-size: 14px;
            text-align: justify;
            box-sizing: border-box;
            &.p-tooltip-top{
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                &::after{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    bottom: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-top: 6px solid #fff;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                }
            }
            &.p-tooltip-bottom{
                bottom: -60px;
                left: 50%;
                transform: translateX(-50%);
                &::after{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-bottom: 6px solid #fff;
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
                    display: inline-block;
                    position: absolute;
                    left: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-right: 6px solid #fff;
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                }
            }
            &.p-tooltip-left{
                right: calc(100%);
                top: 50%;
                transform: translateY(-50%);
                &::after{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-left: 6px solid #fff;
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                }
            }
        }
        .p-tooltip-content-light{
            background-color: #fff;
            color: #333;
            border: 1px solid #fff;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
            &.p-tooltip-top{
                &::before{
                    content: "";
                    position: absolute;
                    bottom: -7px;
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
                    display: inline-block;
                    position: absolute;
                    top: -7px;
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
                    display: inline-block;
                    position: absolute;
                    left: -7px;
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
                    display: inline-block;
                    position: absolute;
                    right: -7px;
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
