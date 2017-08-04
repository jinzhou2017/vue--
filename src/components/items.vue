<template>
  <ul class="todo-main">
  <item v-for="(item, index) in items" :item="item" :key="index" :index="index"></item>
  </ul>
</template>
<script>
  import item from './item.vue'
  export default {
    computed: {
      items () {
        return this.$store.getters.items
      }
    },
    components: {
      item
    }
  }

</script>
<style>

</style>
