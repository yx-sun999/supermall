<template>
  <div class="back-top">
      <img src="../../../assets/images/backTop/back-top.png" alt="">
  </div>
</template>

<script>
export default {
    name:"BackTop",
    methods: {
        // backClick(){
        //     // 回到顶部
        //     console.log("11")
        // }
        // 这里不好做 在home里监听
    },
}
</script>

<style>
.back-top{
    position: fixed;
    bottom: 60px;
    right: 30px;
}
.back-top img{
    width: 40px;
    height: 40px;

}
</style>