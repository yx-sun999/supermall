<template>
  <div id="profile">
    <nav-bar class="nav-bar">
        <div slot="center">我的</div></nav-bar>
        <!--1.单独封装一个组件: 利用slot知识点-->
    <user-info></user-info>

    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <div class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </div>
    
    <!--3.封装成一个整体-->
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
  import UserInfo from './childrenProfile/UserInfo.vue'
  import ListView from './childrenProfile/ListView.vue'
  import NavBar from '../../components/common/navbar/NavBar.vue'
	export default {
		name: "Profile",
    components: {
		  UserInfo, ListView, NavBar
    },
    data() {
		  return {
		    orderList: [
           '我的消息','积分商城','会员卡',
        ],
        serviceList: [
           '我的购物车','下载购物APP',
        ]
      }
    },
	}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .account {
    display: flex;
  }
  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }
  .account-item:last-of-type {
    margin-right: 0;
  }
  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }
  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }
  .account-info {
    margin-top: 6px;
  }
  .order-list, .service-list {
    margin-top: 12px;
  }
  </style>