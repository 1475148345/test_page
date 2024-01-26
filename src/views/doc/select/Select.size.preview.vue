<script setup lang="ts">
import { ref } from "vue";
import { PSelect } from "pui-vue-pxs";
const selectValue = ref("1");
</script>
<preview>尺寸</preview>
<template>
    <div class="flex flex-d-c container">
        <p-select v-model="selectValue" size="small" placeholder="small" />
        <p-select v-model="selectValue" class="mt10" placeholder="default" />
        <p-select v-model="selectValue" size="large" class="mt10" placeholder="large" />
    </div>
</template>
