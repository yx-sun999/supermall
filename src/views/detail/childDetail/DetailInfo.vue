<template>
  <div class="goods-info">
      <div class="info-desc clear-fix">
          <!-- <div class="start"></div> -->
          <div class="desc">{{detailInfo.desc}}</div>
          <!-- <div class="end"></div> -->
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img  v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
      </div>

  </div>
</template>

<script>
export default {
    name:"DetailInfo",
    props:{
        detailInfo:{
            type:Object
        }
    },
    methods: {
        imgLoad(){
            this.$emit('imgLoad')
        }
    },
}
</script>

<style>
.desc{
    font-size: 14px ;
}
.info-key{
    margin-top: 10px;
    font-size:14px;
    color:red
}
.info-list{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
}
.info-list img{
    width: 300px;
    /* flex: 1; */
}
</style>