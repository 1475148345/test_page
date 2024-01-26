<script setup lang="ts">
import { ref } from "vue";
import { PSelect } from "@/lib";
const selectValue = ref("1");
</script>
<preview>尺寸</preview>
<template>
    <div class="flex flex-d-c container">
        <PSelect v-model="selectValue" size="small" placeholder="small" />
        <PSelect v-model="selectValue" class="mt10" placeholder="default" />
        <PSelect v-model="selectValue" size="large" class="mt10" placeholder="large" />
    </div>
</template>
