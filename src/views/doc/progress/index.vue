<template>
  <Preview :component="ProgressPreview" />
  <Preview :component="ProgressTitlePreview" />
  <Preview :component="ProgressShapePreview" />
</template>

<script setup lang="ts">
import ProgressTitlePreview from "./Progress.title.preview.vue"
import ProgressShapePreview from "./Progress.shape.preview.vue"
import ProgressPreview from "./Progress.preview.vue"
import Preview from "@/components/Preview.vue";
</script>
