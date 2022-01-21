
<script setup lang="ts">
import PLoading from "../loading/index.vue";
import { ref, toRef, watch, computed } from 'vue'
const props = defineProps({
    message: {
      type: [String, Number],
      default: 'loading...'
    },
    forbidClick: Boolean, // 是否可点击背景
    duration: {
      type: Number,
      default: 2000
    },
    position: {
      type: String,
      default: 'center' // top、center、bottom、自定义
    },
    loading: Boolean
})

const { forbidClick, duration, message, position } = props

const positionStyle=computed(()=>{
    if (position === 'top') return '10%'
    if (position === 'bottom') return '90%'
    return position || '50%'
})

let visible = ref(false)
let timer:number|null

const methodsMap={
    clickAction:()=> {
      if (forbidClick) methodsMap.close()
    },
    clearTimer:(timer:number|null)=>{
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    },
    close: ()=> {
      visible.value = false
      methodsMap.clearTimer(timer)
    },
    show:()=> {
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
const msg = toRef(props,'message')
watch(msg,(val)=>{
    if (val) methodsMap.show()
},{immediate:true})

</script>
<template>
  <div class="p-toast" v-if="visible">
    <div class="ceng" @click="methodsMap.clickAction()"></div>
    <div class="content" :style="{top:positionStyle}">
      <PLoading v-if="loading" size="20" type="fade"/>
      <span>{{message}}</span>
    </div>
  </div>
</template>
<style lang='scss'>
  .p-toast{
    .ceng{
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      z-index: 1;
    }
    .content{
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      position: fixed;
      z-index: auto;
      background-color: rgba(0, 0, 0, .7);
      border-radius: 5px;
      color: #fff;
      min-width: 60px;
      padding: 8px 12px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .p-loading{
        margin-bottom: 10px;
      }
    }
  }
</style>
