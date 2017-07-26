<template>
  <div>
    <router-link to="/container">Go to Bar</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
  </div>


</template>
<script>
  export default {}

</script>
<style>
  .active {
    color: red;

  }
</style>

