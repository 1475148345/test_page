<script setup lang="ts">
import { ref } from "vue";
import { PInput } from "pui-vue-pxs";
const inputValue = ref();
</script>
<preview>可清除</preview>
<template>
    <PInput v-model="inputValue" clearable placeholder="可清除图标" />
</template>
