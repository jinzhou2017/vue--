<template>
    <li
        @mouseenter.stop="isColor(isEnter)"
        @mouseleave.stop="isColor(!isEnter)"
        :style="{background: isCol}"
    >
    <label>
      <input type="checkbox" v-model="item.complete"/>
      <span>{{item.text}}</span>
    </label>
    <button class="btn btn-danger" @click="removeOne(index)" v-show="isShow">删除</button>
    </li>
</template>
<script>
  export default {
    data () {
      return {
        isEnter: true,
        isCol: '',
        isShow: false
      }
    },
    props: {
      item: Object,
      deleteOne: Function,
      index: Number
    },
    methods: {
      removeOne (index) {
        if (confirm(`确定删除${this.item.text}事项吗？`)) {
          this.deleteOne(index)
        }
      },
      isColor (isEnter) {
        if (isEnter) {
          this.isCol = 'deepskyblue'
        } else {
          this.isCol = ''
        }
        this.isShow = isEnter
      }
    }
  }

</script>
<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #000;
    background-color: #efff77;
    border: 1px solid #17b7bd;
  }

  .btn-danger:hover {
    color: #000;
    background-color: #ffe83b;
  }

  .btn:focus {
    outline: none;
  }

</style>
