<preview>基础示例</preview>
<template>
  <Row>
    <Col>span24</Col>
  </Row>
  <Row>
    <Col :span="8">span8</Col>
    <Col :span="8">span8</Col>
    <Col :span="8">span8</Col>
  </Row>
  <Row>
    <Col :span="12">span12</Col>
    <Col :span="8" :offset="4">span8,offset4</Col>
  </Row>
</template>

<script setup lang="ts">
import Row from "../../../lib/layout/row.vue";
import Col from "../../../lib/layout/col.vue";
</script>
