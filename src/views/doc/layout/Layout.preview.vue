<script setup lang="ts">
import { PRow, PCol } from 'pui-vue-pxs'
</script>
<preview>基础示例</preview>
<template>
  <PRow>
    <PCol>span24</PCol>
  </PRow>
  <PRow>
    <PCol :span="8">span8</PCol>
    <PCol :span="8">span8</PCol>
    <PCol :span="8">span8</PCol>
  </PRow>
  <PRow>
    <PCol :span="12">span12</PCol>
    <PCol :span="8" :offset="4">span8,offset4</PCol>
  </PRow>
</template>


