
<script setup lang="ts">
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
  emit('itemAction')
}
</script>
<template>
  <div class="p-tag" :class="['p-tag--'+type,'p-tag--'+size,plain?'p-tag--plain':'']" @click="itemAction">
    <slot name="icon">
      <Icon :size="iconSize" :color="iconColor" :name="icon"  v-if="icon"></Icon>
    </slot>
    <slot>主要按钮</slot>
  </div>
</template>
<style scoped lang='scss'>
  @import '../style/base.scss';
  .p-tag{
    border-radius: $border-radius-sm;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    user-select: none;
    min-width: 70px;
    margin: 0 10px 10px 10px ;
    &:active{
      opacity: 0.8;
    }
    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .p-tag--plain{
    background-color: $white !important;
    &.p-tag--primary{
      color: $green;
    }
    &.p-tag--info{
      color: $blue;
    }
    &.p-tag--danger{
      color: $red;
    }
    &.p-tag--warning{
      color:$orange;
    }
  }

  [disabled=true],[disabled='disabled'],[disabled]{
    cursor: not-allowed !important;
    opacity: .7 !important;
  }

  .p-tag--primary{
    color: $white;
    background-color: $green;
    border: 1px solid $green;
  }
  .p-tag--info{
    color: $white;
    background-color: $blue;
    border: 1px solid $blue;
  }
  .p-tag--danger{
    color: $white;
    background-color: $red;
    border: 1px solid $red;
  }
  .p-tag--warning{
    color: $white;
    background-color: $orange;
    border: 1px solid $orange;
  }
  .p-tag--default{
    color: $gray-8;
    background-color: $white;
    border: 1px solid $gray-3;
  }

  .p-tag--small{
    height: 30px;
    line-height: 30px;
    padding: 0 6px;
    font-size: $font-size-sm;
  }
  .p-tag--normal{
    height: 32px;
    line-height: 32px;
    padding: 0 8px;
    font-size: $font-size-md;
  }
  .p-tag--big{
    height: 38px;
    line-height: 38px;
    padding: 0 10px;
    font-size: $font-size-lg;
  }
</style>


