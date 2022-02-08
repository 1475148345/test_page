<script setup lang="ts">
import { PProgress } from '../../../lib'
</script>

<preview>圆型进度</preview>
<template>
    <div class="flex flex-1 wrap flex-w-w">
        <PProgress color="error" :percentage="25" type="circle" :circleWidth="150"></PProgress>
        <PProgress color="warning" :percentage="50" type="circle" :circleWidth="150"></PProgress>
        <PProgress color="warning" :percentage="75" type="circle" :circleWidth="150"></PProgress>
        <PProgress color="success" :percentage="100" type="circle" :circleWidth="150" :strokeWidth="10"></PProgress>
    </div>
</template>

<style lang="scss" scoped>
    .wrap{
        .p-svg{
            margin-bottom: 20px;
            margin-right: 20px;
        }
    }
</style>

