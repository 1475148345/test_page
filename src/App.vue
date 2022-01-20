<script setup lang="ts">
import TopNav from './components/topNav.vue';
</script>

<template>
  <TopNav></TopNav>
  <router-view></router-view>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  text-decoration: unset;
}
a:visited{
  color: unset;
}
.router-link-active{
  color: rgb(103, 148, 231) !important;
}
a:hover,a:active{
  color: rgb(103, 148, 231);
}
.view-title{
  padding: 30px 0 10px 0;
  font-size: 16px;
  color: rgb(218, 141, 47);
}

</style>
