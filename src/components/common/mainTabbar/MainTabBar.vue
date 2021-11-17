<template>
   <tab-bar>
     <tab-bar-item path='/home'>
        <img slot="item-icon" src="../../../assets/images/tabbar/我的.png" alt="首页">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/我的active.png" alt="首页">
        <div slot="item-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path='/category'>
       <img slot="item-icon" src="../../../assets/images/tabbar/更多.png" alt="更多">
       <img slot="item-icon-active" src="../../../assets/images/tabbar/更多active.png" alt="首页">
        <div slot="item-text">更多</div>
     </tab-bar-item>
     <tab-bar-item path='/cart'>
       <img slot="item-icon" src="../../../assets/images/tabbar/购物车.png" alt="购物车">
       <img slot="item-icon-active" src="../../../assets/images/tabbar/购物车active.png" alt="首页">
        <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path='/profile'>
       <img slot="item-icon" src="../../../assets/images/tabbar/我的.png" alt="我的">
       <img slot="item-icon-active" src="../../../assets/images/tabbar/我的active.png" alt="首页">
        <div slot="item-text">我的</div>
     </tab-bar-item>
   </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'

export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>