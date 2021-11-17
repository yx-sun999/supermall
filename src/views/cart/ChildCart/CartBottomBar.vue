<template>
  <div class="bottom-bar">
    <div class="checked-all">
    <check-button class="check-button" @click.native="checkAllClick" :isChecked="isCheckedAll"></check-button>
    <span>全选</span>
    </div>
    <div class="total">
        合计:{{totalPrice}}
    </div>
    <div class="computed">
        结算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/CheckButton/CheckButton.vue'
export default {
    name:"CartBottomBar",
    components:{
        CheckButton
    },
    computed:{
        totalPrice(){
            return  "￥" +this.$store.state.cartList.filter(item=>{
                return !item.checked
            }).reduce((preValue,item)=>{
                return preValue+parseInt(item.price.substring(1))*item.count
            },0).toFixed(2)
          
        },
        checkedLength(){
            // 计算
            return this.$store.state.cartList.filter(item=>!item.checked).length
        },
        isCheckedAll(){
            //  判断被选中的CartList和未被选中的长度是否相等 决定是否全选
              return !(this.$store.state.cartList.filter(item=>!item.checked).length ===
              this.$store.state.cartList.length)
        }
            
    },
    methods: {
        checkAllClick(){
            if(this.isCheckedAll===false){
                // 全部选中情况下
                this.$store.state.cartList.forEach(item=>item.checked=true)
            }else{
                // 部分选中或全不选中情况下
                this.$store.state.cartList.forEach(item=>item.checked=false)
            }
    },
    

}
}
</script>

<style scoped>
.bottom-bar{
    height: 40px;
    background-color: rgb(216, 210, 210);
    position: fixed;
    left: 0;
    right: 0;
    bottom:48px;
    display: flex;
    
}
.checked-all{
    margin-left: 10px;
    display: flex;
    line-height:48px;
    font-size:14px
}
.checked-all span{
    margin-left: 5px;
    line-height: 40px;
}
.check-button{
    width: 20px;
    height: 20px;
}
.total{
    margin-left: 15px;
    line-height: 40px;
    font-size: 14px;
}
.computed{
    text-align: center;
    width: 130px;
    background-color: rgb(236, 47, 47);
    margin-left: auto;
    line-height: 40px;
    padding-right: 10px;
    color: #fff;

}
</style>