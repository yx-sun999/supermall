<template>
  <div class="cart-list">
      <cart-list-item v-for="(item,index) in $store.state.cartList" :key="index" :itemInfo="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
    name:"CartList",
    components:{
        CartListItem
    }
}
</script>

<style>

</style>