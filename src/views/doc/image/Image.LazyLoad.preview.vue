<script setup lang="ts">
import { PImage } from 'pui-vue-pxs'
import { getImageUrl } from '@/util'
</script>

<preview>图片懒加载</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-image fit="contain" width="200px" height="200px" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.baidu.com%2Fit%2Fu%3D3062469291%2C1117322059%26fm%3D253%26app%3D120%26f%3DJPEG%3Fw%3D1200%26h%3D800&refer=http%3A%2F%2Fimg2.baidu.com&app=2002&size=w300&q=a80&n=0&g=0n&fmt=jpeg?sec=1645325643&t=6ce71a1052649be26ad91d0de0e99ec6" lazyLoad></p-image>
        <p-image fit="cover" width="200px" height="200px" :src="getImageUrl('123.jpg')" lazyLoad></p-image>
        <p-image fit="none" width="200px" height="200px" :src="getImageUrl('123.jpg')" lazyLoad></p-image>
        <p-image fit="scale-down" width="200px" height="200px" :src="getImageUrl('234.jpg')" lazyLoad></p-image>
        <p-image fit="fit" width="200px" height="200px" :src="getImageUrl('123.jpg')" lazyLoad></p-image>
    </div>
</template>

<style lang="scss" scoped>
    .wrap .p-image{
        margin-right: 10px;
    }
</style>

