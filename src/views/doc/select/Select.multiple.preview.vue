<script setup lang="ts">
import { ref } from "vue";
import { PSelect } from "pui-vue-pxs";
const selectValue = ref([]);
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
<preview>多选multiple</preview>
<template>
    <p-select class="mt10" multiple :option="option" v-model="selectValue" clearable />
</template>
