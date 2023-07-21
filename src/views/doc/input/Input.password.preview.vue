<script setup lang="ts">
import { ref } from 'vue'
import { PInput } from '@/lib'
const inputValue = ref()
</script>
<preview>密码输入框</preview>
<template>
	<PInput v-model="inputValue" type="password" show-password/>
</template>
