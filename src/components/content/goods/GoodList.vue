<template>
  <div class="goods">
      <!-- 展示商品 -->
      <good-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
    name:"GoodList",
    components:{
        GoodListItem
    },
    props:{
        goods:{
            type:Array
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    /* 换行 */
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}


</style>