<template>
  <Preview :component="ImagePreview" />
  <Preview :component="ImageRoundPreview" />
  <Preview :component="ImageFitPreview" />
  <Preview :component="ImageLoadingPreview" />
  <Preview :component="ImageErrPreview" />
  <Preview :component="ImageLazyLoadPreview" />
</template>

<script setup lang="ts">
import ImagePreview from "./Image.preview.vue"
import ImageRoundPreview from "./Image.Round.preview.vue"
import ImageFitPreview from "./Image.Fit.preview.vue"
import ImageLoadingPreview from "./Image.Loading.preview.vue"
import ImageErrPreview from "./Image.Err.preview.vue"
import ImageLazyLoadPreview from "./Image.LazyLoad.preview.vue"
import Preview from "@/components/Preview.vue";
</script>
