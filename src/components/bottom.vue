<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{completeItems}}</span> / 全部{{items.length}}
        </span>
    <button class="btn btn-danger" @click="rmAllCheck" v-show="completeItems">清除已完成任务</button>
  </div>

</template>
<script>
  export default {
    props: {
      items: Array,
      selectAll: Function,
      rmAllCheck: Function
    },
    data () {
      return {
        isAll: false
      }
    },
    computed: {
      completeItems () {
        return this.items.reduce((length, item) => {
          return (length += item.complete ? 1 : 0)
        }, 0)
      }
    },
    watch: {
      isAll: function (newvalue, oldvalue) {
        this.selectAll(newvalue)
      }
    }
  }

</script>
<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }


</style>
