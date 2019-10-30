import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      width_s:document.documentElement.clientWidth
    }
  })
  
  export default store
