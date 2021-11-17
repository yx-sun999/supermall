<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"TabBar"

}
</script>

<style> 
#tab-bar{
  display: flex;
  background-color: #DADADA;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgb(100, 100, .1);
}
</style>



