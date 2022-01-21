<template>
  <Preview :component="Message" />
  <Preview :component="MessagePosition" />
</template>

<script setup lang="ts">
import Message from "./Message.preview.vue";
import MessagePosition from "./Message.position.preview.vue";
import Preview from "@/components/Preview.vue";
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
