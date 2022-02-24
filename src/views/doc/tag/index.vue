<template>
  <Preview :component="Tag" />
  <Preview :component="TagSize" />
  <Preview :component="TagIcon" />
  <Preview :component="TagClose" />
  <Preview :component="TagPlain" />
</template>

<script setup lang="ts">
import Tag from "./Tag.preview.vue";
import TagIcon from "./Tag.icon.preview.vue";
import TagClose from "./Tag.close.preview.vue";
import TagSize from "./Tag.size.preview.vue";
import TagPlain from "./Tag.plain.preview.vue";
import Preview from "../../../components/Preview.vue";
</script>

<style lang="scss">

</style>

