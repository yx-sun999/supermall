<template>
<!-- 弹窗 -->
  <div class="toast"  v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:"Toast",
    props:{
        message:{
            type:String
        },
        isShow:{
            type:Boolean,
            default:false
        }
    },

    
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, .55);
    color: #fff;
    border-radius: 10px;
}
</style>