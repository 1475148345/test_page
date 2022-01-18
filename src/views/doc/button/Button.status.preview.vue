<script setup lang="ts">
import PButton from "../../../lib/button/index.vue";
const click=()=>{
  console.log(11);
}
</script>

<preview>按钮状态</preview>
<template>
<div class="flex flex-w-w ai-c">
  <p-button @itemAction="click" disabled>禁用状态</p-button>
  <p-button type="warning" @itemAction="click" disabled icon='icon-add' iconColor="#fff">禁用状态</p-button>
  <p-button type="primary" @itemAction="click" disabled>禁用状态</p-button>
  <p-button type="info" disabled>禁用状态</p-button>
  <p-button type="danger" disabled>禁用状态</p-button>
  <p-button type="warning" disabled>禁用状态</p-button>
  <p-button type="primary" size="big" class="mt10" @itemAction="click" loading>加载状态</p-button>
</div>

</template>
