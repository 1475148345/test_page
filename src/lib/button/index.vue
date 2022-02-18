
<script setup lang="ts">
import pLoading from '../loading/index.vue'
import Icon from '../icon/index.vue'
const props = defineProps({
    type: {
      type: String,
      default: 'default' // primary、info、default、danger、warning
    },
    size: {
      type: String,
      default: 'normal' // normal、small、big
    },
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: '16px'
    },
    iconColor: {
      type: String,
      default: '#323233'
    }
});
const emit = defineEmits(['itemAction'])
const itemAction = ()=> {
  if (props.disabled || props.loading) return
  emit('itemAction')
}
</script>
<template>
  <button class="p-button" :class="['p-button--'+type,'p-button--'+size,plain?'p-button--plain':'']" @click="itemAction" :disabled="disabled || loading">
    <pLoading v-if="loading"/>
    <slot name="icon">
      <Icon :size="iconSize" :color="iconColor" :name="icon"  v-if="icon"></Icon>
    </slot>
    <slot>主要按钮</slot>
  </button>
</template>
<script lang="ts">
export default {
  name: "pButton",
};
</script>
<style scoped lang='scss'>
  @import '../style/base.scss';
  .p-button{
    border-radius: $border-radius-sm;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    user-select: none;
    min-width: 100px;
    margin: 0 10px 10px 10px ;
    &:active{
      opacity: 0.8;
    }
    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .p-button--plain{
    background-color: $white !important;
    &.p-button--primary{
      color: $green;
    }
    &.p-button--info{
      color: $blue;
    }
    &.p-button--danger{
      color: $red;
    }
    &.p-button--warning{
      color:$orange;
    }
  }

  [disabled=true],[disabled='disabled'],[disabled]{
    cursor: not-allowed !important;
    opacity: .7 !important;
  }

  .p-button--primary{
    color: $white;
    background-color: $green;
    border: 1px solid $green;
  }
  .p-button--info{
    color: $white;
    background-color: $blue;
    border: 1px solid $blue;
  }
  .p-button--danger{
    color: $white;
    background-color: $red;
    border: 1px solid $red;
  }
  .p-button--warning{
    color: $white;
    background-color: $orange;
    border: 1px solid $orange;
  }
  .p-button--default{
    color: $gray-8;
    background-color: $white;
    border: 1px solid $gray-3;
  }

  .p-button--small{
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    font-size: $font-size-sm;
    min-width: 80px;
  }
  .p-button--normal{
    height: 44px;
    line-height: 44px;
    padding: 0 20px;
    font-size: $font-size-md;
  }
  .p-button--big{
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    font-size: $font-size-lg;
    width: 100%;
  }
</style>


