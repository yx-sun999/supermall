<template>
  <div class="left-tab-bar-item">
      <div v-for="item in goods" :key="item.acm" class="item-goods">
      <img :src="item.image" alt="" >
      <div class="item-title">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"LeftTabBarItem",
    props:{
        goods:{
            type:Object
        }
    }
}
</script>

<style scoped>
.left-tab-bar-item{
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    align-items: center;
    justify-content:space-between;
    margin-left: 120px; 
    overflow: hidden;  
}
.item-goods {
    text-align: center;
    
    
}

.left-tab-bar-item img{
    width: 80px;
    height: 80px;
}
.item-title{
    text-align: center;
}

</style>