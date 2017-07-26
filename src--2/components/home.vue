<template>
  <div>
    <button @click="getUrl"> 按钮</button>
  </div>
</template>
<script>
  export default {
    methods: {
      getUrl () {
        console.log(window)
      }
    }
  }

</script>
<style>

</style>

