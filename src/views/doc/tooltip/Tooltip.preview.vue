<script setup lang="ts">
import { PTooltip, PButton } from 'pui-vue-pxs'
</script>

<preview>基础示例</preview>
<template>
  <div class="flex flex-w-w ai-c">
    <h4 style="width: 100%;margin-bottom: 30px;">placement默认auto,可选值为top、bottom、right、left、auto</h4>
    <p-tooltip>
        <p-button>默认</p-button>
    </p-tooltip>
    <p-tooltip placement="top">
        <p-button>top</p-button>
    </p-tooltip>
    <p-tooltip placement="bottom">
        <p-button>bottom</p-button>
    </p-tooltip>
    <p-tooltip placement="right">
        <p-button>right</p-button>
    </p-tooltip>
    <p-tooltip placement="left">
        <p-button>left</p-button>
    </p-tooltip>
    <p-tooltip placement="top" isClickShow>
        <p-button>left点击显示</p-button>
    </p-tooltip>
  </div>
</template>

<style>

</style>
