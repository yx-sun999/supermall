<template>
  <div id='home'>
      <nav-bar  class="home-nav"><div slot="center">购物街</div></nav-bar>
      <!-- tab-control 吸顶解决 -->
      <tab-control :titles="title"  @tabClick="tabClick" ref="offset1"
      v-show="isTabFixed"></tab-control>
      <scorll class="content" ref="scroll" :probe-type="3" @scroll="ContentScroll" 
      :pull-up-load="true" @pullingUp="pullingUp">  <!-- betterScorll-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-future></home-future>
      <tab-control :titles="title"  @tabClick="tabClick" ref="offset" v-show="!isTabFixed"
      ></tab-control>
      <good-list :goods="goodes[currentType].list"></good-list>
      </scorll>
      <!-- 监听组件点击 必须加修饰符.native -->
      <back-top @click.native="backClick" v-show="isTrue"></back-top>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodList from '../../components/content/goods/GoodList.vue'
import Scorll from '../../components/common/scorll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

import HomeSwiper from './childHome/HomeSwiper.vue'
import HomeFuture from './childHome/HomeFuture.vue'
import HomeRecommendView from './childHome/HomeRecommendView.vue'

import {getHomeMultidata,getHomeGoods} from '../../network/home'




export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFuture,
      TabControl,
      GoodList,
      Scorll,
      BackTop
    },
    data() {
      return {
        // 存储请求过来的数据
        banners: [],
        recommends:[],
        title:["流行","新款","精选"],
        goodes:{
          // 设置页码 并保存数据
          // 名字固定 跟请求的数据保持一致 不然请求不到
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isTrue:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
   
    deactivated() {
      // 在不活跃时保存用户所滑动的位置
      this.saveY=this.$refs.scroll.scroll.y

    },
     activated() {
      // 刷新
      this.$refs.scroll.refresh()   
      // 拿到用户滑动位置的记录
      this.$refs.scroll.scrollTo(0,this.saveY,0)
       
    },
    created() {
      // 1.请求多个数据,调用methods里的函数
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted() {
      
        // 监听item中图片加载完成
        // 接收总线事件
      this.$bus.$on('itemImageLoad',() => {
        // 每加载一个图片刷新高度
        this.$refs.scroll.scroll.refresh()
      })
      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性 $el 用于获取组件中的元素
     
      
    },
   
    methods: {
     /**  
      * 事件监听
      */
    //  防抖
    //  debounce(fun,delay){
    //    let timer = null

    //    return function(...args){
    //      if(timer) clearInterval(timer)

    //      timer=setTimeout(()=>{
    //        fun.apply(this,args)
    //      },delay)
    //    }

    //  },

    // 子组件HomeSwiper发射的 轮播图加载完成事件
    swiperImageLoad(){
      
      // 拿到TabControl的offsetTop值
       this.tabOffsetTop=this.$refs.offset.$el.offsetTop
      
    },
     tabClick(index){
      //  切换标题
       switch(index){
         case 0:
            this.currentType = 'pop'
           break;
         case 1:
            this.currentType = 'new'
           break;
         case 2:
            this.currentType = 'sell'
           break;
       }
      //  设置吸顶的点击切换 与原来的保持一致
       this.$refs.offset1.currentIndex=index
       this.$refs.offset.currentIndex=index
     },
     backClick(){
      // 滚到顶部
      // 拿到组件对象，即父访问子组件 访问Scorll组件
      this.$refs.scroll.scroll.scrollTo(0,0,1000) //回到顶部 执行1s
      
    },
    // 子组件发送的scroll事件
    ContentScroll(position){
      // BackTop 隐藏显示
      if(-position.y>1000){
        this.isTrue=true
      }
      else{
        this.isTrue=false
      }
      // 决定tabControl是否吸顶(position:fixed)
      this.isTabFixed=(-position.y)>this.tabOffsetTop
      // this.isTrue=(-position.y)>1000
    },
    pullingUp(){
      // 上拉加载更多
      // 鼠标选择谁 给谁加载更多
      this.getHomeGoods(this.currentType)

      // this.$refs.scroll.scroll.refresh()
    },
     /**  
      *网络请求
      */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        // 接收轮播图数据
        this.banners = res.data.data.banner.list
        this.recommends=res.data.data.recommend.list
       
      }).catch(err => {
        console.log(err)
      })
      },
      getHomeGoods(type){
        // 页码在原来page基础上加一，第二次请求时会再加一
        let page = this.goodes[type].page+1
        getHomeGoods(type,page).then(res => {
              // page无实际作用 为了符合形参
              this.goodes[type].list.push(...res.data.data.list)
              this.goodes[type].page+=1
              
            // 完成上拉加载更多
              this.$refs.scroll.scroll.finishPullUp();
        })
      }
    },
}
</script>

<style scoped>
#home{
  height:100vh
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: sticky;
  right: 0;
  left: 0;
  margin-top: 0;
}

.content{
  height: calc(100% - 91.35px);
  overflow:hidden
}
</style>