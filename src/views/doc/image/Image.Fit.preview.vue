<script setup lang="ts">
import { PImage } from 'pui-vue-pxs'
import { getImageUrl } from '@/util'
</script>

<preview>填充方式</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-image fit="contain" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>
        <p-image fit="cover" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>
        <p-image fit="none" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>
        <p-image fit="scale-down" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>
        <p-image fit="fit" width="200px" height="200px" :src="getImageUrl('234.jpg')"></p-image>
    </div>
</template>

<style lang="scss" scoped>
    .wrap .p-image{
        margin-right: 10px;
    }
</style>

