<template>
  <div class="category">
    <nav-bar class="goods-sort">
      <div slot="center">商品分类</div>
      </nav-bar>
    <left-tab-bar :goods="goods" class="left-tab-bar"></left-tab-bar>    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import LeftTabBar from './childCategory/LeftTabBar.vue'


import {getCategoryGoods} from '../../network/category'



export default {
    name:"Category",
    data() {
      return {
        goods:{}
      }
    },
    components:{
      NavBar,
      LeftTabBar,
    },
    created() {
      this.getCategoryGoods()
    },
    methods: {
      getCategoryGoods(){
        getCategoryGoods().then(res=>{
          this.goods=res.data.data.list
          console.log(res)
        })
      }
    },

}
</script>

<style scoped>
.goods-sort{
  background-color: var(--color-tint);
  color: white;
  position: sticky;
  right: 0;
  left: 0;
  margin-top: 0;
}
/* .left-tab-bar{
  height: 100vh;
  overflow: hidden;
} */
</style>