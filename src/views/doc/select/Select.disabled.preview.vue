<script setup lang="ts">
import { ref } from "vue";
import { PSelect } from "@/lib";
const selectValue = ref("1");
const selectList = ref([]);
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
const optionList = ref([
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
<preview>有禁用选项</preview>
<template>
    <PSelect class="mt10" filterable :option="option" v-model="selectValue" clearable />
    <PSelect class="mt10" multiple :option="optionList" v-model="selectList" clearable />
</template>
