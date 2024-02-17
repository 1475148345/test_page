<script setup lang="ts">
import { PButton, PIcon } from "pui-vue-pxs";
const click = () => {
    console.log(11);
};
</script>

<preview>带图标</preview>
<template>
    <div class="flex flex-w-w ai-c">
        <p-button @itemAction="click" icon="icon-emoji">icon-emoji</p-button>
        <p-button type="primary">
            <template #icon>
                <p-icon name="icon-sousuo" size="16px" color="#fff"></p-icon>
            </template>
            icon-sousuo
        </p-button>
        <p-button type="info" icon="icon-add" iconColor="#fff">icon-add</p-button>
        <p-button type="danger" icon="icon-shanchu" iconColor="#fff">icon-shanchu</p-button>
        <p-button type="warning" icon="icon-fangdazhanshi" iconColor="#fff">icon-fangdazhanshi</p-button>
    </div>
</template>
