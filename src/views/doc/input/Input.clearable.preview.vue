<script setup lang="ts">
import { ref } from 'vue'
import { PInput } from '@/lib'
const inputValue = ref()
</script>
<preview>可清除</preview>
<template>
	<PInput v-model="inputValue" clearable/>
</template>
