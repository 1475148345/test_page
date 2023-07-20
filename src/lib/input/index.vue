
<script setup lang="ts">
import { PropType, computed } from 'vue';
import { InputSizeType } from '../types/input';

const props = defineProps({
	size: {
		type: String as PropType<InputSizeType>,
		default: 'default' // 'large' | 'default' | 'small'
	},
	modelValue:{
		type:[String,Number]
	}
})

const emit = defineEmits(['update:modelValue'])
const value = computed({
	get(){
		return props.modelValue
	},
	set(value){
		emit('update:modelValue',value)
	}
})
</script>
<template>
  <input type="text" placeholder="请输入内容" class="p-input" :class="'p-input--'+props.size" v-model="value">
</template>
<script lang="ts">
export default {
  name: "pInput",
};
</script>
<style scoped lang='scss'>
  @import '../style/base.scss';
	.p-input--large{
		height: 40px;
		line-height: 40px;
		padding: 1px 15px;
		border-radius: $border-radius-lg;
	}
	.p-input--default{
		height: 32px;
		line-height: 32px;
		padding: 1px 11px;
		border-radius: $border-radius-md;
	}
	.p-input--small{
		height: 24px;
		line-height: 24px;
		padding: 1px 7px;
		border-radius: $border-radius-sm;
	}
	.p-input{
		border: 1px solid $border-color;
		&:focus{
			outline:1px solid $color-primary;
		}
		&::-webkit-input-placeholder{
			color: $placeholder;
		}
	}
</style>


