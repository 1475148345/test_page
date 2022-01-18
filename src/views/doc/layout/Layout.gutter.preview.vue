<preview>列元素增加间距</preview>
<template>
  <Row :gutter="5">
    <Col :span="8">span8</Col>
    <Col :span="8">span8</Col>
    <Col :span="8">span8</Col>
  </Row>
</template>

<script setup lang="ts">
import Row from "../../../lib/layout/row.vue";
import Col from "../../../lib/layout/col.vue";
</script>
