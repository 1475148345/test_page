<template>
  <svg class="p-icon" aria-hidden="true"
    :style="svgStyle"
  >
    <use :xlink:href="iconName" ></use>
  </svg>
</template>
<script setup lang="ts">
  import {computed} from 'vue'
  import './link.js'
  const props = defineProps({
    name: {
      type: String,
      default: 'icon-right'
    },
    size: {
      type: String,
      default: '20px'
    },
    color: String
  })
  const { name, size, color } = props
  const iconName=computed(()=>`#${name}`)
  const svgStyle=computed(()=>{
    const styleStr = []
    size && styleStr.push(`font-size:${size};`)
    color && styleStr.push(`color:${color};`)
    return styleStr.join('')
  })
</script>
<!-- <script lang="ts">
export default {
  name: 'p-icon'
}
</script> -->
<style lang="scss" scoped>
  .p-icon {
       width: 1em;
       height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
       color: #323232;
       margin: 0 2px;
    }
</style>
