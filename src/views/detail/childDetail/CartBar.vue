<template>
  <div class="bottom-bar">
    <div class="service">
        <img src="../../../assets/images/detail/客服.png" alt="">
        <div>客服</div>
    </div>
    <div class="shop">
        <img src="../../../assets/images/detail/商店.png" alt="">
        <div>店铺</div>
    </div>
    <div class="collect">
        <img src="../../../assets/images/detail/收藏.png" alt="">
        <div>收藏</div>
    </div>
    <div class="cart" @click="addToCart">
        加入购物车
    </div>
    <div class="buy">
        购买
    </div>
  </div>
</template>

<script>
export default {
    name:"CartBar",
    methods: {
        addToCart(){
            // 添加到购物车
            this.$emit('addCart')
        }
    },
}
</script>

<style scoped>
.bottom-bar{
    height: 49px;
    background-color:rgb(235, 238, 238);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    
    
}
.bottom-bar .service{
    margin-top: 5px;
    flex: 1;
    font-size: 14px;
}
.bottom-bar .shop{
    margin-top: 5px;
    flex: 1;
    font-size: 14px;
    
}
.bottom-bar .collect{
    margin-top: 4px;
    flex: 1;
    font-size: 14px;
    
}
.bottom-bar .cart{
    line-height: 48px;
    background-color: #ffd9bc;
    border:1px solid #f0cab6;
    flex: 1;
    
}
.bottom-bar .buy{
    line-height: 48px;
    background-color:#f22d00;
    border:1px solid #f22d00;
    flex: 1;
    color: white;
}

img{
    width: 25px;
    height: 25px;

}
</style>