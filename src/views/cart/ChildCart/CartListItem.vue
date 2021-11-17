<template>
  <div id="shop-item">
      <div class="item-selector">
          <CheckButton :isChecked="itemInfo.checked" @click.native="checkClick"></CheckButton>
      </div>
      <div>
          <img :src="itemInfo.image" alt="商品图片" class="item-img">
      </div>
      <div class="item-info">
          <div class="item-title">{{itemInfo.title}}</div>
          <div class="item-desc">{{itemInfo.desc}}</div>
          <div class="info-bottom">
              <div class="item-price left">{{itemInfo.price}}</div>
              <div class="item-count right">×{{itemInfo.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/CheckButton/CheckButton.vue'
export default {
    name:"CartListItem",
    components:{
        CheckButton
    },
    props:{
        itemInfo:{
            type:Object
        }
    },
    methods: {
        // checkedbox 选中不选中切换
        checkClick(){
            this.itemInfo.checked=!this.itemInfo.checked
        }
    },
}
</script>

<style scoped>
#shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
.item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-title,.item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.item-info{
    font-size: 17px;
    color:#333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.item-info .item-desc{
    font-size:14px;
    color: #666;
    margin-top: 15px;
}
.info-bottom .item-price{
    color: orangered;
}

</style>