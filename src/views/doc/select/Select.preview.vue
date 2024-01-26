<script setup lang="ts">
import { ref } from "vue";
import { PSelect } from "pui-vue-pxs";
const selectValue = ref("1");
const option = ref([
    {
        label: "苹果",
        value: "1",
    },
    {
        label: "橘子",
        value: "2",
    },
    {
        label: "草莓",
        value: "3",
        disabled: true,
    },
    {
        label: "猕猴桃",
        value: "4",
    },
    {
        label: "梨",
        value: "5",
    },
]);
</script>
<preview>基础示例</preview>
<template>
    <p-select class="mt10" :option="option" v-model="selectValue" />
</template>
