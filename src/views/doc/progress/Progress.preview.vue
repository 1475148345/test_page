<script setup lang="ts">
import { PProgress } from '../../../lib'
</script>

<preview>基础示例</preview>
<template>
    <div class="flex flex-1 wrap flex-d-c">
        <PProgress bg-color="#1989fa" :percentage="0"></PProgress>
        <PProgress bg-color="#1989fa"></PProgress>
        <PProgress color="info"></PProgress>
        <PProgress color="error"></PProgress>
        <PProgress color="success" :percentage="75"></PProgress>
        <PProgress color="warning" :percentage="100"></PProgress>
        <PProgress color="warning" :percentage="100" :height="20"></PProgress>
        <PProgress color="warning" :percentage="100" :height="20" title-position="center"></PProgress>
    </div>
</template>

<style lang="scss" scoped>
    .wrap{
        .p-progress{
            margin-bottom: 20px;
        }
    }
</style>

