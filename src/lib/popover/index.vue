
<script setup lang="ts">
import { PropType, ref, nextTick, watch, toRef } from 'vue'
import { TOOLTIP } from '../enums/position';
import { tooltipType } from '../types/position'
import { tooltipThemeType } from '../types/theme'
const props = defineProps({
    content:{
        type:String,
        default:'这是提示内容'
    },
    placement:{
        type: String as PropType<tooltipType>, //top、bottom、right、left、auto
        default: 'auto'
    },
    isClickShow:Boolean,
    theme:{
        type: String as PropType<tooltipThemeType>,
        default:'light'
    },
    visible: Boolean
})
const { content, placement, isClickShow } = props

const emit = defineEmits(['update:visible'])

const position = ref('')
const isShow = toRef(props,'visible')
const noModel = ref(false)
const methodsMap={
    setPosition:()=>{
        const el:HTMLElement|null = document.querySelector('#popover')
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
        position.value = `p-popover-${TOOLTIP.bottom}`
        if(placement!==TOOLTIP.auto){
            position.value = `p-popover-${placement}`
            methodsMap.setPosition()
        }else{
            const el:HTMLElement|null = document.querySelector('#popover')
            if(el){
                const {x,y,bottom,top,left,right} = el.getBoundingClientRect()
                if(x<10) position.value = `p-popover-${TOOLTIP.right}`
                if(y<10) position.value = `p-popover-${TOOLTIP.bottom}`
                if(bottom>top) position.value = `p-popover-${TOOLTIP.top}`
                if(right>left) position.value = `p-popover-${TOOLTIP.left}`
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
    noModel.value=val
    if(val) nextTick(()=>methodsMap.autoPosition())
})
watch(noModel,(val)=>{
    if(val) nextTick(()=>methodsMap.autoPosition())
})

</script>
<template>
  <div class="p-popover">
    <div class="p-popover-content-dark" id="popover" :class="[position,'p-popover-content-'+theme]" v-if="isShow || noModel">
        <slot name="content"><div v-html="content"></div></slot>
    </div>
    <div  @mouseover="methodsMap.mouseover" @mouseout="methodsMap.mouseout" @click="methodsMap.clickShow">
        <slot></slot>
    </div>
  </div>
</template>
<style lang='scss' scoped>
    .p-popover{
        position: relative;
        .p-popover-content-dark{
            position: absolute;
            padding: 8px 12px;
            width: 300px;
            // word-break: break-all;
            z-index: 222;
            border-radius: 4px;
            background-color: #333;
            color: #fff;
            line-height: 1.2;
            font-size: 14px;
            text-align: justify;
            box-sizing: border-box;
            &.p-popover-top{
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
            &.p-popover-bottom{
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
            &.p-popover-right{
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
            &.p-popover-left{
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
        .p-popover-content-light{
            background-color: #fff;
            color: #333;
            border: 1px solid #fff;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
            &.p-popover-top{
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
            &.p-popover-bottom{
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
            &.p-popover-right{
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
            &.p-popover-left{
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
