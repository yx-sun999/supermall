<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <img src="../../../assets/images/user/头像.png" alt="">
      <div class="login-info">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
         <div class="phone">
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      
    </a> 
  </div>
</template>

<script>
	export default {
		name: "UserInfo"
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }
  img{
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }
  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }
  #user-info .login-info .phone {
    position: relative;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }
  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
  </style>