<template>
 
      <swiper class="detail-swiper">
          <swiper-item v-for="(item,index) in topImages" :key="index" class="swiper-item">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>

</template>

<script>
// 轮播图组件
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
    name:"DetailSwiper",
     components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array
        }
    },
   
}
</script>

<style scoped>
.swiper-item{
   height: 300px;
   overflow: hidden;
}

</style>