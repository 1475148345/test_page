<script setup lang="ts">
import { computed, inject } from "vue";
const props = defineProps({
    span: {
        type: Number,
        default: 24,
    },
    offset: {
        type: Number,
        default: 0,
    },
});
const style = computed(() => {
    const gutter: any = inject("gutter");
    return gutter > 0 ? `padding:0 ${gutter}px;` : "";
});
</script>

<template>
    <div class="p-col" :class="['p-col--' + span, offset > 0 ? 'p-col--offset-' + offset : '']" :style="style">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.p-col {
    float: left;
}

@for $i from 1 through 25 {
    .p-col--#{$i} {
        width: calc($i/24 * 100%);
    }
    .p-col--offset-#{$i} {
        margin-left: calc($i/24 * 100%);
    }
}
</style>
