<template>
  <Preview :component="Button" />
  <Preview :component="ButtonIcon" />
  <Preview :component="ButtonStatus" />
  <Preview :component="ButtonSize" />
  <Preview :component="ButtonPlain" />
</template>

<script setup>
import Button from "./Button.preview.vue";
import ButtonIcon from "./Button.icon.preview.vue";
import ButtonStatus from "./Button.status.preview.vue";
import ButtonSize from "./Button.size.preview.vue";
import ButtonPlain from "./Button.plain.preview.vue";
import Preview from "../../../components/Preview.vue";
</script>

<style lang="scss">

</style>

