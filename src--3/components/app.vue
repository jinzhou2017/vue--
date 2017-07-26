<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <add :add-item-one="addItemOne"></add>
      <items :items="items" :delete-one="deleteOne"></items>
      <bottom :items="items" :select-all="selectAll" :rm-all-check="rmAllCheck"></bottom>
    </div>
  </div>

</template>
<script>
  import add from './add.vue'
  import items from './items.vue'
  import bottom from './bottom.vue'
  import setLocalstroage from './localStorage/setLocalstorage'
  export default {
    data () {
      return {
        items: [
          {
            text: 'sunwukong',
            complete: false
          }
        ]
      }
    },
    created () {
      let items = setLocalstroage.get()
      this.items = items
    },
    components: {
      add,
      items,
      bottom
    },
    methods: {
      addItemOne (item) {
        this.items.unshift(item)
      },
      deleteOne (index) {
        this.items.splice(index, 1)
      },
      selectAll (isAll) {
        if (isAll) {
          this.items = this.items.map(item => {
            return {
              text: item.text,
              complete: true
            }
          })
        } else {
          this.items = this.items.map(item => {
            return {
              text: item.text,
              complete: false
            }
          })
        }
      },
      rmAllCheck () {
        this.items = this.items.filter(item => {
          return item.complete === false
        })
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
