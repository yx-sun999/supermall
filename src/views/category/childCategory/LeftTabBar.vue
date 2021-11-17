<template>
  <div class="left-bar">
      <div class="sort">
          <div v-for="(item,index) in popular" :key="index" class="sort-item" 
          @click="sortClick(index)" :class="{active:currentIndex==index}">{{item}}</div>
      </div>
        <scroll>
      <left-tab-bar-item :goods="goods" class="item-img"></left-tab-bar-item>
      </scroll>
  </div>
</template>

<script>
import LeftTabBarItem from './LeftTabBarItem.vue'


export default {
    components:{
        LeftTabBarItem,
       
       
    },
    data() {
        return {
            popular:["正在流行","上衣","裤子","裙子","内衣","女鞋","男友","包包","运动","配饰","美妆","个护"],
            currentIndex:0
        }
    },
    props:{
        goods:{
            type:Object
        }
    },
    computed:{
        isActive(){
           return this.currentIndex==this.index
        }
    },
    methods: {
        sortClick(index){
            this.currentIndex=index
        }
    },
}
</script>

<style scoped>
.left-bar{
    font-size: 14px;
    display: flex;
    
    
}
.sort{
    /* margin-left: 10px; */
    width: 80px;
    display: flex;
    background-color: rgb(224, 222, 222);
    flex-flow: column;
    flex-wrap: wrap;
    height: 100vh;
    position: fixed;
    top: 44px;
    left: 0;
    bottom: 0;
    
  
}
.sort-item{
    flex:1;
    width: 80px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-weight:500;
}


.active{
    color:rgb(245, 33, 33);
    background-color: #fff;
}
</style>