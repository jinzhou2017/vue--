<template>
  <ul class="todo-main">
  <item v-for="(item, index) in items" :item="item" :delete-one="deleteOne" :key="index" :index="index"></item>
  </ul>
</template>
<script>
  import item from './item.vue'
  export default {
    props: {
      items: Array,
      deleteOne: Function
    },
    components: {
      item
    }
  }

</script>
<style>

</style>
