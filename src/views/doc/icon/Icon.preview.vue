<script setup lang="ts">
import { Icons, pIcon } from 'pui-vue-pxs'
console.log(Icons);

</script>
<preview>基础示例</preview>
<template>
  <p-icon v-for="item in Icons" :key="item" :name="item"></p-icon>
</template>


