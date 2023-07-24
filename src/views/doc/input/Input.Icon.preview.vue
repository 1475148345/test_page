<script setup lang="ts">
import { PInput, PIcon } from '@/lib'
</script>
<preview>带图标输入框</preview>
<template>
	<div class="container">
		<PInput placeholder="自定义前缀图标">
			<template #prefixIcon>
				<p-icon name="icon-eye" size="16px" color="#7e8db9"></p-icon>
			</template>
		</PInput>
		<PInput prefixIcon="icon-emoji" class="mt10" placeholder="前缀图标"></PInput>

		<PInput class="mt10" placeholder="自定义后缀图标">
			<template #suffixIcon>
				<p-icon name="icon-eye" size="16px" color="#7e8db9"></p-icon>
			</template>
		</PInput>
		<PInput suffixIcon="icon-emoji" class="mt10" placeholder="后缀图标"></PInput>
	</div>
</template>
