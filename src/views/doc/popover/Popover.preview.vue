<script setup lang="ts">
import { PPopover, PButton } from '../../../lib'
import { ref,watch } from 'vue'
const visible = ref(false)
watch(visible,(val)=>{
    console.log(val);
})
</script>

<preview>基本用法</preview>
<template>
  <div class="flex flex-w-w ai-c">
    <p-popover >
        <p-button>默认</p-button>
    </p-popover>
    <p-popover placement="top" >
        <p-button>top</p-button>
    </p-popover>
    <p-popover placement="bottom" >
        <p-button>bottom</p-button>
    </p-popover>
    <p-popover placement="right" >
        <p-button>right</p-button>
    </p-popover>
    <p-popover placement="left" >
        <p-button>left</p-button>
    </p-popover>
    <p-popover placement="top" isClickShow >
        <p-button>点击弹出</p-button>
    </p-popover>
    <p-popover placement="top" isClickShow v-model:visible="visible">
        <template #content>
            <p style="padding: 10px 0;">这是一段内容这是一段内容确定删除吗,这是一段内容这是一段内容确定删除吗?</p>
            <div class="flex flex-w-w ai-c jc-fe">
                <p-button size="mini" @click="visible=false">取消</p-button>
                <p-button size="mini" type="info" @click="visible=false">确定</p-button>
            </div>
        </template>
        <p-button>点击弹出,自定义弹窗内容</p-button>
    </p-popover>
  </div>
</template>

<style>

</style>
