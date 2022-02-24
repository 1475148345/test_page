
<script setup lang="ts">
import Icon from '../icon/index.vue'
import { computed } from 'vue'
const props = defineProps({
    type: {
      type: String,
      default: 'default' // primary、info、default、danger、warning
    },
    size: {
      type: String,
      default: 'normal' // normal、small、big
    },
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
    },
    closable: Boolean
});
const emit = defineEmits(['click','close'])
const itemAction = ()=> emit('click')
const close = ()=> emit('close')

const closeColor = computed(()=>{
    const colors:{
        [propName:string]:string
    } = {
        primary: '#07c160',
        info: '#1989fa',
        default: '#323233',
        danger: '#ee0a24',
        warning: '#ff976a',
    }
    return props.plain?colors[props.type]: (props.type === 'default'?'#323233':'#ffffff')
})
</script>
<template>
  <div class="p-tag" :class="['p-tag--'+type,'p-tag--'+size,plain?'p-tag--plain':'']" @click="itemAction">
    <slot name="icon">
      <Icon :size="iconSize" :color="iconColor" :name="icon"  v-if="icon"></Icon>
    </slot>
    <div :style="closable?'margin-right:8px;color:inherit;':'color:inherit;'">
        <slot>标签</slot>
    </div>
    <Icon :color="closeColor" size="16" name="icon-close" class="close-hover" v-if="closable" @click.stop="close"></Icon>
  </div>
</template>
<style scoped lang='scss'>
  @import '../style/base.scss';
  .p-tag{
    border-radius: $border-radius-md;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    user-select: none;
    min-width: 60px;
    margin: 0 10px 10px 10px ;
    position: relative;
    .close-hover{
        cursor: pointer;
        position: absolute;
        right: 3px;
         &:hover{
            background-color: rgba(0,0,0,.1);
            border-radius: 50%;
            color: $white;
        }
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

  .p-tag--primary{
    color: $white;
    background-color: $green;
    border: 1px solid $green;
    .close-hover{
        &:hover{
            background-color: rgba(0,0,0,.1);
            border-radius: 50%;
            color: $white;
        }
    }
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
    height: 24px;
    line-height: 24px;
    padding: 0 2px;
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
  .close-hover{
    cursor: pointer;
  }
</style>


