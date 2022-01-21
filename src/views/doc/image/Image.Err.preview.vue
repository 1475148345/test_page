<script setup lang="ts">
import { PImage } from 'pui-vue-pxs'
</script>

<preview>加载失败</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-image fit="contain" width="200px" height="200px" src="../assets/234.jpg" lazyLoad></p-image>
    </div>
</template>

<style lang="scss" scoped>
    .wrap .p-image{
        margin-right: 10px;
    }
</style>

