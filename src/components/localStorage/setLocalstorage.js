export default {
  save (items) {
    localStorage.setItem('itemsKey', JSON.stringify(items))
  },
  get () {
    return JSON.parse(localStorage.getItem('itemsKey') || '[]')
  }
}
