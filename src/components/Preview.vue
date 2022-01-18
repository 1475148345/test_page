<template>
  <div class="pre">
    <h2 class="flex jc-sb ai-c">
      {{ component.__sourceCodeTitle }}
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </h2>
    <div class="pre-component">
      <component :is="component" />
    </div>

    <div class="pre-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "../lib/button/index.vue";
import { computed, ref } from "vue";
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
const props = defineProps({
  component: Object,
});

// console.log(props.component.__sourceCode);
const html = computed(() => {
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
const showCode = () => (codeVisible.value = true);
const hideCode = () => (codeVisible.value = false);
const codeVisible = ref(false);
</script>
<style lang="scss" scoped>
    .pre{
      border-top: 1px dashed #e5e5e5;
      padding: 10px 0;
      margin-bottom: 60px;
    }
</style>