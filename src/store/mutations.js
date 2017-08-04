export default {
  addItemOne (state, item) {
    state.items.unshift(item)
  },
  deleteOne (state, index) {
    state.items.splice(index, 1)
  },
  selectAll (state, isAll) {
    if (isAll) {
      state.items = state.items.map(item => {
        return {
          text: item.text,
          complete: true
        }
      })
    } else {
      state.items = state.items.map(item => {
        return {
          text: item.text,
          complete: false
        }
      })
    }
  },
  rmAllCheck (state) {
    state.items = state.items.filter(item => {
      return item.complete === false
    })
  }
}
