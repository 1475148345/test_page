<script setup lang="ts">
import { ref } from 'vue'
import { PInput } from '@/lib'
const inputValue = ref()
</script>
<preview>基础示例</preview>
<template>
	<div class="flex flex-d-c container">
			<PInput size="small" v-model="inputValue"/>
			<PInput class="mt10"/>
		
			<PInput size="large" class="mt10"/>
	</div>
</template>
