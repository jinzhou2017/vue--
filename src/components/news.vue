<template>
  <ul>
    <li v-for="(item, index) in news" :key="index">
      {{item}}
    </li>
  </ul>

</template>
<script>
  export default {
    data () {
      return {
        news: []
      }
    },
    created () {
      const news = ['news01', 'news02', 'news03']
      setTimeout(() => {
        this.news = news
      }, 1000)
    }
  }

</script>
<style>

</style>
