<template>
  <Preview :component="Layout" />
  <Preview :component="LayoutGutter" />
  <Preview :component="LayoutFlex" />
</template>

<script setup>
import Layout from "./Layout.preview.vue";
import LayoutGutter from "./Layout.gutter.preview.vue";
import LayoutFlex from "./Layout.flex.preview.vue";
import Preview from "../../../components/Preview.vue";
</script>

<style lang="scss">

 .p-row{
    height: 100%;
  }
  .p-col{
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
    margin-top: 5px;
    text-align: center;
    color: #fff;
    background-clip: content-box;
    &:nth-child(odd){
      background-color: #39a9ed;
    }
  }

</style>