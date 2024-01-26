<template>
    <Preview :component="Select" />
    <Preview :component="SelectSize" />
    <Preview :component="SelectDisabled" />
    <Preview :component="SelectClearable" />
    <Preview :component="SelectFilterable" />
    <Preview :component="SelectMultiple" />
</template>

<script setup lang="ts">
import Select from "./Select.preview.vue";
import SelectSize from "./Select.size.preview.vue";
import SelectDisabled from "./Select.disabled.preview.vue";
import SelectClearable from "./Select.clearable.preview.vue";
import SelectFilterable from "./Select.filterable.preview.vue";
import SelectMultiple from "./Select.multiple.preview.vue";
import Preview from "@/components/Preview.vue";
</script>

<style lang="scss"></style>
