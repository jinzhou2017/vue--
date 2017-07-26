<template>
  <div class="row">
    <h2 v-if="isStart">请输入要搜索的githup的用户名！！</h2>
    <h2 v-if="isLoading">Loading....</h2>
    <div class="card" v-for="(item, index) in items">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>

  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    props: ['username'],
    data () {
      return {
        isStart: true,
        isLoading: false,
        items: [],
        error: ''
      }
    },
    watch: {
      username: function () {
        this.isStart = false
        this.isLoading = true
        this.items = []
        let url = `https://api.github.com/search/users?q=${this.username}`
        axios.get(url)
          .then(res => {
            this.items = res.data.items.map(item => {
              return {
                login: item.login,
                avatar_url: item.avatar_url,
                html_url: item.html_url
              }
            })
            this.isLoading = false
          })
      }
    }
  }

</script>
<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
