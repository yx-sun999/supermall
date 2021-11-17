<template>
<!-- <div> -->
  <div class="tab-bar-item" @click="itemClick">
      <!-- 活跃图片切换  外侧div是为了不让slot标签里的属性被覆盖 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
    
    <!-- <div class="tab-bar-item">
        <img src="../../assets/images/tabbar/更多.png" alt="">
        分类
    </div>
    <div class="tab-bar-item">
        <img src="../../assets/images/tabbar/购物车.png" alt="">
        购物车
    </div>
    <div class="tab-bar-item">
        <img src="../../assets/images/tabbar/我的.png" alt="">
        我的
    </div> -->
    <!-- </div> -->
</template>

<script>
export default {
    name:"TabBarItem",
    data(){
        return{
            // isActive:false
        }
    },
    computed:{
       isActive(){ 
        //    判断当前活跃的路径和item的路径的是否相同
        //    return this.$route.path.indexOf(this.path) !==-1
        return this.$route.path==this.path
       }
    },
    props:{
        path:String
    },
    methods:{
        itemClick(){
            // 路径不能写死 需要传进来
            this.$router.push(this.path)
            // 抛出错误 避免连续点击同一个报错
            .catch(err=>err)
        },
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    width: 24px;
    height: 23px;
    /* vertical-align: middle; */
    /* margin-bottom: 2px; */
    margin-top:5px ;
}
.active{
    color:purple;
}
</style>

