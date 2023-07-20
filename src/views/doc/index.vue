
<template>
    <div class="flex wrap">
				<div>
					<h2>基础组件</h2>
					<nav class="menu">
							<router-link class="menu-item" to="/doc/button">Button 按钮</router-link>
							<router-link class="menu-item" to="/doc/layout">Layout 布局</router-link>
							<router-link class="menu-item" to="/doc/icons">icons 图标</router-link>
							<router-link class="menu-item" to="/doc/loading">loading 加载</router-link>
							<router-link class="menu-item" to="/doc/image">image 图片</router-link>
							<router-link class="menu-item" to="/doc/toast">toast 轻提示</router-link>
							<router-link class="menu-item" to="/doc/message">message 消息提示</router-link>
							<router-link class="menu-item" to="/doc/progress">progress 进度条</router-link>
							<router-link class="menu-item" to="/doc/dialog">dialog 弹窗提示</router-link>
							<router-link class="menu-item" to="/doc/tag">tag 标签</router-link>
							<router-link class="menu-item" to="/doc/tooltip">tooltip 文字提示</router-link>
							<router-link class="menu-item" to="/doc/popover">popover 弹出框</router-link>
					</nav>
					<h2>表单</h2>
					<nav class="menu">
							<router-link class="menu-item" to="/doc/input">input 输入框</router-link>
					</nav>
				</div>
        <main class="content flex-1">
            <router-view />
        </main>
    </div>
</template>

<style lang="scss" scoped>
    .wrap{
        padding: 10px;
        height: calc(100vh - 60px);
				h2{
					padding: 10px;
					font-size: 18px;
				}
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
            // overflow-y: auto;
        }
    }
</style>
