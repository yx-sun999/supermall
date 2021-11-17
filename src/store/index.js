import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车储存数据
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
      payload.checked=false
      // payload新添加的商品
      let oldProduct = null
      for(let item of state.cartList){
        if(item.iid===payload.iid){
          oldProduct=item
        }
      }

      // 判断oldProduct是否存在
      if(oldProduct){
        oldProduct.count+=1
      }
      else{
        payload.count=1
        
        state.cartList.push(payload)
      }
      
    }
    
  },
  actions: {
  },
  modules: {
  },
})
