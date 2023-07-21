<template>
  <Preview :component="Input" />
  <Preview :component="InputSize" />
  <Preview :component="InputClearable" />
  <Preview :component="InputPassword" />
</template>

<script setup lang="ts">
import Input from "./Input.preview.vue";
import InputSize from "./Input.size.preview.vue";
import InputClearable from "./Input.clearable.preview.vue";
import InputPassword from "./Input.password.preview.vue";
import Preview from "@/components/Preview.vue";
</script>

<style lang="scss">

</style>
