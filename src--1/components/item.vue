<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="remove">删除</a>
    </div>
    <p class="user"><span >{{comment.username}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>

</template>
<script>
  export default {
    props: ['comment', 'index', 'removeOne'],
    methods: {
      remove () {
        const {comment, index} = this
        if (confirm(`你确定要删除${comment.username}的评论吗？`)) {
          this.removeOne(index)
        }
      }
    }
  }
</script>
<style>

</style>
