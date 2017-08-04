export default {
  addItemOne ({commit}, item) {
    commit('addItemOne', item)
  },
  deleteOne ({commit}, index) {
    commit('deleteOne', index)
  },
  selectAll ({commit}, isAll) {
    commit('selectAll', isAll)
  },
  rmAllCheck ({commit}) {
    commit('rmAllCheck')
  }
}
