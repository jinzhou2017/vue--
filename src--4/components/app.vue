<template>
  <div class="container">
    <search :get-name="getName"></search>
    <list :username="username"></list>


  </div>

</template>
<script>
  import search from './search.vue'
  import list from './list.vue'
  export default {
    data () {
      return {
        username: ''
      }
    },
    components: {
      search,
      list
    },
    methods: {
      getName (username) {
        this.username = username
      }
    }
  }

</script>
<style>

</style>
