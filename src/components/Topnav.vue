<template>
    <header class="flex">
        <h1 class="flex-1">left</h1>
        <div class="topnav">
            <!-- <router-link to="/home">首22页</router-link> -->
            <router-link to="/doc/button">文档</router-link>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    header{
        height:60px;
        line-height:60px;
        border-bottom:1px solid #e5e5e5;
        h1{
            padding:0 20px;
        }
        .topnav{
            padding:0 20px;
        }
    }
</style>