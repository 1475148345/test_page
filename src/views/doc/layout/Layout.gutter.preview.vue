<script setup lang="ts">
import { PRow, PCol } from 'pui-vue-pxs'
</script>
<preview>列元素增加间距</preview>
<template>
  <PRow :gutter="5">
    <PCol :span="8">span8</PCol>
    <PCol :span="8">span8</PCol>
    <PCol :span="8">span8</PCol>
  </PRow>
</template>

