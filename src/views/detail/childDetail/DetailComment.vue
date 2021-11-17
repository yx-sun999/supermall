<template>
  <div id="detail-comment">
      <div class="top">
          <span class="comment">用户评价</span>
          <span class="more">更多</span>
      </div>
      <div class="user">
          <img :src="comments[0].user.avatar" alt="">
          {{comments[0].user.uname}}
      </div>
      <div class="content">
          {{comments[0].content}}
      </div>
      <div class="style">
        <span>{{transferTime}}</span>
        <span class="color">{{comments[0].style}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailComment",
    data() {
        return {
            
        }
    },
    props:{
        comments:{
            type:Object
        }
    },
    computed: {
       transferTime(){
       var jsonDate = new Date(this.comments[0].created);
       Date.prototype.format = function (format){
             var  o = {
                  "y+": this.getFullYear(),
                  "M+": this.getMonth()+1,
                  "d+": this.getDate(),
                  "h+": this.getHours(),
                  "m+": this.getMinutes(),
                  "s+": this.getSeconds()

             };
             
             if(/(y+)/.test(format)){
                  format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
             }

             for(var k in o){
                  if(new RegExp("("+k+")").test(format)){
                      format = format.replace(RegExp.$1, RegExp.$1.length == 1?o[k] : (" " + o[k]).substr("" + o[k].length));
                  }
             }
             return format;
       };
       var newDate = jsonDate.format("yyyy/M/d hh:mm:ss");
       return newDate
}
    }
}
</script>

<style>
#detail-comment{
  margin-top: 10px;
  border-bottom: 5px solid #f2f5f8;
  padding-bottom: 20px;
}
.top{
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(100,100,100,.1);
}

.top .comment{
    font-size: 18px;
    margin-left: 10px;
    
}
.top .more{
    font-size: 14px;
    margin-left: 60%;
    
}
.user{
    margin-top: 10px;
    font-size: 17px;
}
.user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 10px;
}
.content{
    margin-top: 10px;
    font-size: 14px;
}
.style{
    margin-top: 5px;
    font-size:12px ;
    color:rgba(100,100,100,.7); ;
}
.style .color{
    margin-left: 5px;
}

</style>