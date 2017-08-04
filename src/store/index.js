import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state = {
  items: [
    {
      text: 'sunwukong',
      complete: false
    }
  ]
}
export default new Vuex({
  state,
  actions,
  mutations,
  getters
})
