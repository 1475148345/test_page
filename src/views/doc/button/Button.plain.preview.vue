<script setup lang="ts">
import PButton from "../../../lib/button/index.vue";

</script>

<preview>朴素按钮</preview>
<template>
<div class="flex flex-w-w ai-c">
  <p-button size="small" plain></p-button>
  <p-button type="primary" size="normal" plain></p-button>
  <p-button type="danger" plain></p-button>
  <p-button type="warning" plain></p-button>
  <p-button type="info" size="big" plain class="mt10"></p-button>
</div>
</template>
