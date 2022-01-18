<script setup>
    import { computed, watchEffect,provide } from 'vue';
    const props = defineProps({
        gutter: {
            type: [Number, String],
            default: 0
        },
        type: {
            type: String // 可选flex
        },
        justify: {
            type: String, // Flex 主轴对齐方式，可选值为 start end center space-around space-between
            default: 'start'
        },
        align: {
            type: String, // Flex 交叉轴对齐方式，可选值为 top center bottom
            default: 'top'
        }
    })
    watchEffect(()=>{
      const {gutter} = props
      provide('gutter', gutter)
    })
    const classComp = computed(()=>{
        const {type,justify,align} = props
        let classStr = []
        if (type === 'flex') {
            classStr = ['p-flex', 'p-flex-jc-' + justify, 'p-flex-ai-' + align]
        }
        return classStr.join(' ')
    })
</script>

<template>
  <div class="p-row" :class="classComp">
    <slot></slot>
  </div>
</template>
<!-- <style>
  .p-row >.p-col:first-child{
    padding-left: 0 !important;
  }
  .p-row >.p-col:last-child{
    padding-right: 0 !important;
  }
</style> -->
<style lang="scss" scoped>
@import '../style/base.scss';
.p-row{
  width: 100%;
  &::after{
    display: table;
    clear: both;
    content: '';
  }
  
}

.p-flex{
  &::after{
    content: "";
    display: none;
  }
}
</style>
