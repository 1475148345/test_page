<script setup>
    import { computed,inject } from 'vue';
    const props = defineProps({
        span: {
            type: [Number, String],
            default: 24
        },
        offset: {
            type: [Number, String],
            default: 0
        }
    })
    const style = computed(()=>{
        const gutter = inject('gutter')
        return gutter > 0 ? `padding:0 ${gutter}px;` : ''
    })
</script>

<template>
  <div
    class="p-col"
    :class="['p-col--' + span, offset > 0 ? 'p-col--offset-' + offset : '']"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.p-col{
  float: left;
}


@for $i from 1 through 25{
    .p-col--#{$i}{
        width: calc($i/24*100%);
    }
    .p-col--offset-#{$i}{
        margin-left: calc($i/24*100%);
    }
}

</style>
