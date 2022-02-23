<template>
  <Preview :component="Tag" />
  <Preview :component="TagSize" />
  <!-- <Preview :component="ButtonIcon" />
  <Preview :component="ButtonStatus" />
  <Preview :component="ButtonSize" />
  <Preview :component="ButtonPlain" /> -->
</template>

<script setup lang="ts">
import Tag from "./Tag.preview.vue";
// import ButtonIcon from "./Button.icon.preview.vue";
// import ButtonStatus from "./Button.status.preview.vue";
import TagSize from "./Tag.size.preview.vue";
// import ButtonPlain from "./Button.plain.preview.vue";
import Preview from "../../../components/Preview.vue";
</script>

<style lang="scss">

</style>

