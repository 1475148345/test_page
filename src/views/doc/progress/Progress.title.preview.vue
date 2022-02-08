<script setup lang="ts">
import { PProgress } from 'pui-vue-pxs'

</script>

<preview>进度条位置</preview>
<template>
    <div class="flex flex-1 wrap flex-d-c">
        <PProgress bg-color="#1989fa" :percentage="0"></PProgress>
        <PProgress bg-color="#1989fa"></PProgress>
        <PProgress color="info" titlePosition="left"></PProgress>
        <PProgress color="error" titlePosition="left"></PProgress>
        <PProgress color="success" :percentage="75" titlePosition="left"></PProgress>
        <PProgress color="warning" :percentage="100" titlePosition="left"></PProgress>
        <PProgress color="error" :percentage="75" titlePosition="center" :height="20"></PProgress>
        <PProgress color="warning" :percentage="100" titlePosition="center" :height="20"></PProgress>

    </div>
</template>

<style lang="scss" scoped>
    .wrap{
        .p-progress{
            margin-bottom: 20px;
        }
    }
</style>

