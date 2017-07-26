<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :add-comment="addComment"></add>
      <list :msg="msg"></list>

    </div>
  </div>


</template>
<script>
  import add from './add.vue'
  import list from './list.vue'
  export default {
    data () {
      return {
        msg: [
          {username: 'sunwukong', content: 'hello world!'},
          {username: 'zhubajie', content: 'good afternoon!'}
        ]
      }
    },
    components: {
      add,
      list
    },
    methods: {
      addComment (comment) {
        const {username, content} = comment
        if (!username.trim() || !content.trim()) {
          alert('请正确输入！')
          return
        }
        this.msg.unshift(comment)
      }
    }
  }

</script>
<style>


</style>
