<script setup lang="ts">
import { PButton } from "pui-vue-pxs";

const click = (): void => {
    console.log(111);
};
</script>

<preview>基础示例</preview>
<template>
    <div class="flex flex-w-w ai-c">
        <p-button @itemAction="click">default</p-button>
        <p-button type="primary" @itemAction="click">primary</p-button>
        <p-button type="info">info</p-button>
        <p-button type="danger">danger</p-button>
        <p-button type="warning">warning</p-button>
    </div>
</template>

<style></style>
