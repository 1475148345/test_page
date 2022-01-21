<script setup lang="ts">
import { PImage } from 'pui-vue-pxs'
import { getImageUrl } from '@/util'
</script>

<preview>图片形状</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-image round width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>
        <p-image radius="5px" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>
    </div>
</template>

<style lang="scss" scoped>
    .wrap .p-image{
        margin-right: 10px;
    }
</style>

