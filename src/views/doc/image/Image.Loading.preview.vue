<script setup lang="ts">
import { PIcon, PImage } from 'pui-vue-pxs'
</script>

<preview>加载中</preview>
<template>
    <div class="flex flex-1 wrap">
        <p-image fit="contain" width="200px" height="200px"></p-image>
        <p-image fit="contain" width="200px" height="200px">
            <template #loadingIcon>
                <p-icon name="icon-emoji" size="32px" color="#969799"></p-icon>
            </template>
        </p-image>
    </div>
</template>

<style lang="scss" scoped>
    .wrap .p-image{
        margin-right: 10px;
    }
</style>

