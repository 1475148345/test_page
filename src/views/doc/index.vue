<script setup>

</script>

<template>
    <div class="flex wrap">
        <aside class="menu">
            <router-link class="menu-item" to="/doc/button">Button 按钮</router-link>
            <router-link class="menu-item" to="/doc/layout">Layout 布局</router-link>
        </aside>
        <main class="content flex-1">
            <router-view />
        </main>
    </div>
</template>

<style lang="scss" scoped>
    .wrap{
        padding: 10px;
        height: calc(100vh - 60px);
        .menu{
            width: 200px;
            overflow-y: auto;
            .menu-item{
                display: block;
                padding: 5px 10px;
                width: 100%;
                font-size: 16px;
            }
        }
        .content{
            padding: 10px;
            background-color: #f8f8f8;
            margin-left: 10px;
            border-radius: 5px;
            overflow-y: auto;
        }
    }
</style>
