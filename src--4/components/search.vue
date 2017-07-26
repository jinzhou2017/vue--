<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="username"/>
      <button @click="searchOne">Search</button>
    </div>
  </section>

</template>
<script>
  export default {
    props: {
      getName: Function
    },
    data () {
      return {
        username: ''
      }
    },
    methods: {
      searchOne () {
        let username = this.username.trim()
        if (!username) {
          return
        }
        this.getName(username)
        this.username = ''
      }
    }
  }

</script>
<style>

</style>
