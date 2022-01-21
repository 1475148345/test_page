<script setup lang="ts">
import { PImage } from 'pui-vue-pxs'
import { getImageUrl } from '@/util'
</script>

<preview>基础示例</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-image width="200px" height="200px" :src="getImageUrl('123.jpg')"></p-image>
    </div>
</template>

<style lang="scss" scoped>

</style>

