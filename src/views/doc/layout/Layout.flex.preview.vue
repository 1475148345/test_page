
<script setup lang="ts">
  import { PRow, PCol } from 'pui-vue-pxs'
</script>
<preview>flex布局</preview>
<template>
    <h3 class="view-title">flex布局:主轴</h3>
    <PRow :gutter="5" type='flex'>
      <PCol :span="8">默认</PCol>
      <PCol :span="8">默认</PCol>
    </PRow>
    <PRow :gutter="5" type='flex' justify="center">
      <PCol :span="8">center</PCol>
      <PCol :span="8">center</PCol>
    </PRow>
    <PRow :gutter="5" type='flex' justify="end">
      <PCol :span="8">end</PCol>
      <PCol :span="8">end</PCol>
    </PRow>
    <PRow :gutter="5" type='flex' justify="space-around">
      <PCol :span="8">space-around</PCol>
      <PCol :span="8">space-around</PCol>
    </PRow>
    <PRow :gutter="5" type='flex' justify="space-between">
      <PCol :span="8">space-between</PCol>
      <PCol :span="8">space-between</PCol>
    </PRow>

    <h3 class="view-title">flex布局:交叉轴对齐方式</h3>
    <div class="container" style="border:1px dashed #ccc;height:80px;">
      <PRow :gutter="5" type='flex'>
        <PCol :span="8">默认</PCol>
        <PCol :span="8">默认</PCol>
      </PRow>
    </div>
    <div class="container" style="border:1px dashed #ccc;height:80px;">
      <PRow :gutter="5" type='flex' align="center">
        <PCol :span="8">默认</PCol>
        <PCol :span="8">默认</PCol>
      </PRow>
    </div>
    <div class="container" style="border:1px dashed #ccc;height:80px;">
      <PRow :gutter="5" type='flex' align="bottom">
        <PCol :span="8">默认</PCol>
        <PCol :span="8">默认</PCol>
      </PRow>
    </div>
</template>