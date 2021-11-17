<template>
  <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index"> 
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  data() {
    return {
      isLoad:false
    }
  },
    components:{
    SwiperItem,
    Swiper
    },
    props:{
        banners:{
            type:Array,
        }
    },
    methods: {
      // 轮播图加载
      
      imgLoad(){
        // 记录一个变量 isLoad 只让它发出一次
        if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad=true
        }
      }
    },
}
</script>

<style>

</style>