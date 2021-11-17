<template>
  <div id="detail">
     <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
     <!-- 轮播图 -->
     <scorll class="content" ref="scroll" @scroll="contentScroll" :probeType="3" >
     <detail-swiper :top-images="topImages"></detail-swiper>
     <detail-base-info :goods="goods"></detail-base-info>
     <detail-shop-info :shop="shop"></detail-shop-info>
     <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad" ></detail-info>
     <detail-param-info ref="params" :goodsParams="goodsParams"></detail-param-info>
     <detail-comment :comments="comments" ref="comment"></detail-comment>
     <good-list  ref="recommend" :goods="goodes['new'].list"></good-list>
     </scorll>
     <cart-bar @addCart="addCart"></cart-bar>
     <back-top @click.native="backClick" v-show="isTrue"></back-top>
     <toast message="您已经成功添加" :isShow="show"></toast>
  </div>
</template>

<script>
import DetailNavBar from './childDetail/DetailNavBar.vue'
import DetailSwiper from './childDetail/DetailSwiper.vue'
import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
import DetailShopInfo from './childDetail/DetailShopInfo.vue'
import DetailInfo from './childDetail/DetailInfo.vue'
import DetailParamInfo from './childDetail/DetailParamInfo.vue'
import GoodList from '../../components/content/goods/GoodList.vue'
import DetailComment from './childDetail/DetailComment.vue'
import CartBar from './childDetail/CartBar.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

import {getHomeGoods} from '../../network/home'


import Scorll from '../../components/common/scorll/Scroll.vue'

import {getDetail,Goods,Shop,GoodsParm} from '../../network/detail'

import Toast from '../../components/common/toast/Toast.vue'
export default {
    name:"Detail",
    data() {
        return {
           iid:null ,
           topImages:[],
           goods:{},
           shop:{},
           detailInfo:{},
           goodsParms:{},
           goodes:{
             'new':{list:[]}
           },
           titleTopY:[],
           comments:[],
           isTrue:false,
           show:false
 
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scorll,
        DetailInfo,
        DetailParamInfo,
        GoodList,
        DetailComment,
        CartBar,
        BackTop,
        Toast
       
       
    },
    created() {
        // 拿到路由配置里的:iid
        this.iid = this.$route.params.iid,
        // 根据iid请求数据
        getDetail(this.iid).then(res=>{
            // 获取顶部图片轮播数据
            console.log(res)
            const data=res.data.result;
            this.topImages=data.itemInfo.topImages

            // 获取详情数据
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);

            // 获取店铺信息
            this.shop=new Shop(data.shopInfo)

            // 获取商品图片详细信息
            this.detailInfo=data.detailInfo

            // 获取商品文字详细写信息
            this.goodsParams=new GoodsParm(data.itemParams.info,data.itemParams.rule)

            // 获取买家评论
            this.comments=data.rate.list
            // console.log(this.comments)

            this.getHomeGoods('new')

            // nextTick(callback)是渲染完成之后回调一个函数
            // this.$nextTick(()=>{
            //     this.titleTopY.push(0)
            //     this.titleTopY.push(-(this.$refs.params.$el.offsetTop))
            //     this.titleTopY.push(-(this.$refs.recommend.$el.offsetTop))
            //     this.titleTopY.push(-(this.$refs.recommend.$el.offsetTop))
            //     console.log(this.titleTopY)
            // })
            
        })

        
    },
    mounted() {
        // 接收GoodListItem里的事件总线
        this.$bus.$on('reload',()=>{
            // window.location.reload()
        })
    },
    updated() {
       
    },

    methods: {
        imgLoad(){
            this.$refs.scroll.scroll.refresh()
                this.titleTopY=[]
                this.titleTopY.push(0)
                this.titleTopY.push(-(this.$refs.params.$el.offsetTop))
                this.titleTopY.push(-(this.$refs.comment.$el.offsetTop))
                this.titleTopY.push(-(this.$refs.recommend.$el.offsetTop))
                // console.log(this.titleTopY)

        },
        getHomeGoods(type){
        // 页码在原来page基础上加一，第二次请求时会再加一
        let page = this.goodes[type].page+1
        getHomeGoods(type,page).then(res => {
              // res会获取到第一页的30条数据
              // 将数组压到数组里 push
              // ... 是将数组解析 一个一个塞进新数组里
              // console.log(res)
              this.goodes[type].list.push(...res.data.data.list)
              this.goodes[type].page+=1

            // 完成上拉加载更多
              this.$refs.scroll.scroll.finishPullUp();
        })
        },
        // DetailNavBar传过来的事件
        titleClick(index){
            this.$refs.scroll.scroll.scrollTo(0,this.titleTopY[index],200)

        },
        contentScroll(position){
            // 隐藏显示BackTop
            if(-position.y>1000){
                this.isTrue=true
            }
            else{
                this.isTrue=false
            }

        //滚动内容显示对应标题  Scroll传来的事件
            // 获取y值
            let postionY = -position.y
            // titleTopY
            if(postionY>=-this.titleTopY[0]){
                this.$refs.nav.currentIndex=0    
            }
            if(postionY>=-this.titleTopY[1]){
                this.$refs.nav.currentIndex=1
            }
            if(postionY>=-this.titleTopY[2]){
                this.$refs.nav.currentIndex=2
            }
            if(postionY>=-this.titleTopY[3]){
                this.$refs.nav.currentIndex=3
            }
            
        },
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,0)
        },
        // CartBar发出事件
        addCart(){
            // 获取购物车需要展示的东西
            const product = {}
            product.image=this.topImages[0]
            product.title=this.goods.title
            product.desc=this.goods.desc
            product.price=this.goods.newPrice
            product.iid=this.iid

            // 将商品添加到购物车里
            this.$store.commit('addCart',product)
            // 点击购物车提示消息
            this.show=true
            setTimeout(()=>{
                this.show=false
            },1500)

        },
        
    },
}
</script>

<style scoped>
#detail{
    /* 隐藏底部导航栏 */
    position: relative;
    z-index: 99;
    background-color: white;
    height: 100vh;
}
.content{
    /* 设定滚动高度 */
    height: calc(100% - 44px);
    overflow: hidden;
}
</style>