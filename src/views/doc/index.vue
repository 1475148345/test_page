
<template>
    <div class="flex wrap">
        <aside class="menu">
            <router-link class="menu-item" to="/doc/button">Button 按钮</router-link>
            <router-link class="menu-item" to="/doc/layout">Layout 布局</router-link>
            <router-link class="menu-item" to="/doc/icons">icons 图标</router-link>
            <router-link class="menu-item" to="/doc/loading">loading 加载</router-link>
            <router-link class="menu-item" to="/doc/image">image 图片</router-link>
            <router-link class="menu-item" to="/doc/toast">toast 轻提示</router-link>
            <router-link class="menu-item" to="/doc/message">message 消息提示</router-link>
            <router-link class="menu-item" to="/doc/progress">progress 进度条</router-link>
            <router-link class="menu-item" to="/doc/dialog">dialog 弹窗提示</router-link>
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
                color: #333;
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
