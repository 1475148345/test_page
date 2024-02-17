<script setup lang="ts">
import { PInput } from "pui-vue-pxs";
</script>
<preview>尺寸</preview>
<template>
    <div class="flex flex-d-c container">
        <PInput size="small" placeholder="small" />
        <PInput class="mt10" placeholder="default" />
        <PInput size="large" class="mt10" placeholder="large" />
    </div>
</template>
