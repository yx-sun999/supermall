<template>
    <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item">
        <div class="info">{{item}}</div>
      </div>
    </div>
</template>


<script>
	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        }
      }
    }
	
</script>

<style scoped>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }
  #list .item {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .item .info {
    position:fixed;
    left: 40px;
    
  }
  .item:last-of-type .info {
    border-bottom: none;
  }
  </style>