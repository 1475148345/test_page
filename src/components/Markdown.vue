// /components/Markdown.vue

<script setup lang="ts">
// 传入的md文件
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="markdown-body" v-html="content"></article>
</template>