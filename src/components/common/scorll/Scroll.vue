<template>
<!-- ref 绑定在普通元素中，那么可以获取到一个元素对象 -->
  <div class="wrapper" ref="wrapper">
      <!-- 第二层div是第一个子元素 即内容 接受滚动 -->
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScorll from 'better-scroll'
export default {
    // 滚动封装
    name:"Scorll",
    props:{
        // 传到父组件
        probeType:Number,
        pullUpLoad:Boolean,
        
    },
    data() {
        return {
            // 接收数据
            scroll:null
        }
    },
    mounted() {
        // 创建better-scroll
        this.scroll=new BScorll(this.$refs.wrapper,{
        //默认为false 无法监听点击事件 
        click:true,

        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,

        })
        // 监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            // console.log(position)
            // 发送事件 做到组件自己决定
            this.$emit('scroll',position)
        })

        // 上拉加载
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    },
}
</script>

<style>

</style>