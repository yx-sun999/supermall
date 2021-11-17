<template>
  <div class="good-list-item" @click="itemClick">
          <!-- @load 监听图片是否加载完成 解决上拉bug -->
      <img :src="goodsItem.show.img" alt="" @load="imgLoad">
      <div class="info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price|getPrice}}</span>
          <span class="sale">{{goodsItem.cfav|getSale}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"GoodListItem",
    props:{
        goodsItem:{
            type:Object
        }
    },
    filters:{
        getPrice(price){
            return "￥"+price;
        },
        getSale(sale){
            return "★"+sale;
        }
    },
    methods: {
        imgLoad(){
            // 事件总线
            this.$bus.$emit('itemImageLoad')
        },
        itemClick(){
            // 跳转详情页
            this.$router.push('/detail/'+this.goodsItem.iid)
            // 为Detail推荐进行页面刷新
            this.$bus.$emit('reload')
        }
    },
}
</script>

<style> 
  .good-list-item{
      font-size: 10px;
      width: 48%;
  }
  .good-list-item img{
      width: 100%;
      border-radius:2% ;
  }
  .info{
      width: 200x;
      text-align: center;
      /* overflow: hidden; */
  }
  /* .info p{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
  } */
  .info .price{
      color: red;
      margin-right: 10px;
  }
</style>