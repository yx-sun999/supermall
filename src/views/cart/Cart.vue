<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="cart">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 购物车列表 -->
    <cart-list></cart-list>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './ChildCart/CartList.vue'
import CartBottomBar from './ChildCart/CartBottomBar.vue'


export default {
    name:"Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      cartLength(){
      return this.$store.state.cartList.length
      }
    }
}
</script>

<style scoped>
.cart{
  background-color: var(--color-tint);
  color: white;
  position: sticky;
  right: 0;
  left: 0;
  margin-top: 0;
}
</style>