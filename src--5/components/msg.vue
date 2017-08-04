<template>
  <p>
    {{msg}}
  </p>

</template>
<script>
  export default {
    data () {
      return {
        msg: ''
      }
    },
    mounted () {
      const id = this.$route.params.id
      setTimeout(() => {
        this.msg = `详情为${id}的xxxx`
      }, 1000)
    },
    watch: {
      $route: function (to, from) {
        const id = to.params.id
        setTimeout(() => {
          this.msg = `详情为${id}的xxxx`
        }, 1000)
      }
    }
  }

</script>
<style>

</style>
