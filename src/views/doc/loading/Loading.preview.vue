<script setup lang="ts">
import {PLoading} from 'pui-vue-pxs'
</script>

<preview>基础示例</preview>
<template>
    <div class="flex flex-1 wrap">
        <PLoading color="black" size="30" type="scale"></PLoading>
        <PLoading color="black" size="30" type="fade"></PLoading>
    </div>
</template>

<style lang="scss" scoped>
    .wrap .p-loading{
        margin-right:10px;
    }
</style>

