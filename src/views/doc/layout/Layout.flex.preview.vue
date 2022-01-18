<preview>flex布局</preview>
<template>
    <h3 class="view-title">flex布局:主轴</h3>
    <Row :gutter="5" type='flex'>
      <Col :span="8">默认</Col>
      <Col :span="8">默认</Col>
    </Row>
    <Row :gutter="5" type='flex' justify="center">
      <Col :span="8">center</Col>
      <Col :span="8">center</Col>
    </Row>
    <Row :gutter="5" type='flex' justify="end">
      <Col :span="8">end</Col>
      <Col :span="8">end</Col>
    </Row>
    <Row :gutter="5" type='flex' justify="space-around">
      <Col :span="8">space-around</Col>
      <Col :span="8">space-around</Col>
    </Row>
    <Row :gutter="5" type='flex' justify="space-between">
      <Col :span="8">space-between</Col>
      <Col :span="8">space-between</Col>
    </Row>

    <h3 class="view-title">flex布局:交叉轴对齐方式</h3>
    <div class="container" style="border:1px dashed #ccc;height:80px;">
      <Row :gutter="5" type='flex'>
        <Col :span="8">默认</Col>
        <Col :span="8">默认</Col>
      </Row>
    </div>
    <div class="container" style="border:1px dashed #ccc;height:80px;">
      <Row :gutter="5" type='flex' align="center">
        <Col :span="8">默认</Col>
        <Col :span="8">默认</Col>
      </Row>
    </div>
    <div class="container" style="border:1px dashed #ccc;height:80px;">
      <Row :gutter="5" type='flex' align="bottom">
        <Col :span="8">默认</Col>
        <Col :span="8">默认</Col>
      </Row>
    </div>
</template>

<script setup lang="ts">
import Row from "../../../lib/layout/row.vue";
import Col from "../../../lib/layout/col.vue";
</script>