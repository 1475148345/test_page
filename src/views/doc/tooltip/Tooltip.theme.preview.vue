<script setup lang="ts">
import { PTooltip, PButton } from 'pui-vue-pxs'
</script>

<preview>主题颜色</preview>
<template>
  <div class="flex flex-w-w ai-c">
    <h4 style="width: 100%;margin-bottom: 30px;">theme 可选dark、light,默认dark</h4>
    <p-tooltip theme="light">
        <p-button>默认</p-button>
    </p-tooltip>
    <p-tooltip placement="top" theme="light">
        <p-button>top</p-button>
    </p-tooltip>
    <p-tooltip placement="bottom" theme="light">
        <p-button>bottom</p-button>
    </p-tooltip>
    <p-tooltip placement="right" theme="light">
        <p-button>right</p-button>
    </p-tooltip>
    <p-tooltip placement="left" theme="light">
        <p-button>left</p-button>
    </p-tooltip>
    <p-tooltip placement="top" isClickShow theme="light">
        <p-button>top点击显示</p-button>
    </p-tooltip>
  </div>
</template>

<style>

</style>
