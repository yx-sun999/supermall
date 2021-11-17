<template>
  <div class="tab-control">
      <!-- 小标题 -->
     <div v-for="(item,index) in titles" :key="index" @click="itemClick(index)" class="tab-control-item"
     :class="{active:index===currentIndex}" >
        <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            // 点击按钮触发样式
            this.currentIndex=index
            // 将事件传出去
            this.$emit('tabClick',index)
        }
    },
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: white;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span{
    padding: 10px;
}
.active{
    color: var(--color-high-text);
    
}
.active span{
border-bottom:3px solid var(--color-tint) ;
}
</style>