
<script setup lang="ts">
import { PropType, computed, ref } from 'vue';
import { InputSizeType } from '../types/input';
import { PIcon } from '../index'
const props = defineProps({
	size: {
		type: String as PropType<InputSizeType>,
		default: 'default' // 'large' | 'default' | 'small'
	},
	modelValue:{
		type:[String,Number]
	},
	clearable:Boolean,
	showPassword:Boolean,
	type:{
		type:String,
		default:'text',//text、password等
	}
})

const type = ref(props.type)

const emit = defineEmits(['update:modelValue'])
const inputValue = computed({
	get(){
		return props.modelValue
	},
	set(value){
		emit('update:modelValue',value)
	}
})

const isFocus = ref(false)
const focus=()=>{
	isFocus.value=true
}
const blur=()=>{
	isFocus.value=false
}
const clear=()=>{
	inputValue.value=''
}

const isShowPassword = ref(props.showPassword)
const showPasswordChange=()=>{
	isShowPassword.value=!isShowPassword.value
	if(isShowPassword.value){
		type.value = 'password'
	}else{
		type.value = 'text'
	}
}
</script>
<template>
	<div class="p-input p-flex p-flex-ai-center" :class="['p-input--'+props.size,isFocus ? 'is-focus' :'']">
		<input :type="type" placeholder="请输入内容" class="p-flex-1" v-model="inputValue" @focus="focus" @blur="blur">
		<div class="icon" v-if="props.clearable && inputValue" @click="clear">
			<p-icon name="icon-close1" size="16px" color="#c8c9cc"></p-icon>
		</div>
		<div class="icon show" v-if="showPassword" @click="showPasswordChange">
			<p-icon name="icon-eye-close" size="16px" color="#7e8db9" v-if="isShowPassword"></p-icon>
			<p-icon name="icon-eye" size="16px" color="#7e8db9" v-else></p-icon>
		</div>
	</div>
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
		&.is-focus{
				border-color: $color-primary;
				&:hover{
					border-color: $color-primary;
				}
		}
		border: 1px solid $border-color;
		&:hover{
			border-color: $gray-5;
			.icon{
				display: block;
			}
		}
		input{
			width: 100%;
			outline: none;
			border: none;
			&::-webkit-input-placeholder{
				color: $placeholder;
			}
		}
		.icon{
			cursor: pointer;
			opacity: .7;
			display: none;
		}
		.show{
			display: block;
		}
	}
</style>


