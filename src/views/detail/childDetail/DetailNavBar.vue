<template>
  <div class="detail-nav-bar">
    <!-- 导航栏 -->
     <nav-bar>
         <div slot="left" class="back" @click="backClick">
             <img src="../../../assets/images/back/返回.png" alt="" >
         </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in title" :key="index" class="title-item" 
            :class="{active:currentIndex===index}" @click="itemClick(index)">
                {{item}}
            </div>     
        </div> 
     </nav-bar>
     
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'

export default {
    name:"DetailNavBar",
    components: {
        NavBar,
        
    },
    data() {
        return {
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex=index
            // 点击标题滚动到对应内容
            this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()
        }
    },
}
</script>

<style>
.detail-nav-bar nav-bar{
    /* position:fixed; */
    top: 44px;
    /* 隐藏底部导航栏 */
    position: sticky;
    z-index: 9;
    background-color: #fff;
}
.title{
    display:flex;
    font-size:13px
}
.title-item{
    flex: 1;
}
.active{
    color:var(--color-high-text);
}
.back img{

    width: 23px;
    height: 23px;
    margin-top: 11px;
}
</style>