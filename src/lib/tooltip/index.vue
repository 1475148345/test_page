
<script setup lang="ts">
import { onMounted, computed, reactive } from 'vue'
const props = defineProps({
    content:{
        type:String,
        default:'这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容'
    }
})
const { content } = props

const state = reactive({
    lineNumber:1,//行数
    lineSize:30,//每行字数
})

const methodsMap={
    setPosition:()=>{
        const el:HTMLElement|null = document.querySelector('.p-tooltip-content')
        if(el){
            const { lineNumber } = state
            console.log(el.getBoundingClientRect(),state.lineNumber);
            const {x,y} = el.getBoundingClientRect()
            if(x<10){
                el.style.marginLeft = Math.abs(x)+10+'px'
            }
            el.style.top = `${(- 40 - (lineNumber-1)*15)}px`
        }
    }
}
onMounted(() => {
  methodsMap.setPosition()
})

const contentTitle = computed(()=>{
    const { lineSize } = state
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
    <div class="p-tooltip-content" v-html="contentTitle"></div>
    <slot></slot>
  </div>
</template>
<style lang='scss' scoped>
    .p-tooltip{
        position: relative;
        .p-tooltip-content{
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
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
    }
</style>
