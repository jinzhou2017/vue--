<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <add></add>
      <items></items>
      <bottom></bottom>
    </div>
  </div>

</template>
<script>
  import add from './add.vue'
  import items from './items.vue'
  import bottom from './bottom.vue'
  import setLocalstroage from './localStorage/setLocalstorage'
  export default {
    created () {
      let items = setLocalstroage.get()
      this.items = items
    },
    components: {
      add,
      items,
      bottom
    },
    computed: {
      items () {
        return this.$store.getters.items
      }
    },
    watch: {
      items: {
        handler: setLocalstroage.save,
        deep: true
      }
    }
  }

</script>
<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }


</style>
