<template>
  <div id="app">
    <keep-alive exclude="wrapper,Detail,GoodList">
    <router-view></router-view>
    </keep-alive>
    
    <main-tab-bar></main-tab-bar>
  </div>
</template>


<script>
import MainTabBar from './components/common/mainTabbar/MainTabBar.vue'
export default {

  name:'app',
  components:{
    MainTabBar
  }
}
</script>
<style lang="less">
@import './assets/css/base.css';
</style>
