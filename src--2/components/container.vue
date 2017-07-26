<template>
  <div>
      <router-link to="/container/home">
      主页
      </router-link>
      <router-link to="/container/detail">
        登录
      </router-link>
      <router-view></router-view>
  </div>

</template>
<script>
  export default {
    methods: {
      switchUrl11 () {
        console.log(11111)
        console.log(location.hash)
      }
    }
  }
</script>

