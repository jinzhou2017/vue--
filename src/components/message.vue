<template>
  <div>
    <ul>
      <li v-for="(item, index) in msg" :key="index">
        <router-link :to="`/home/message/msg/${item.id}`">
          {{item.title}}
        </router-link>
      </li>

    </ul>
    <router-view></router-view>

  </div>


</template>
<script>
  export default {
    data () {
      return {
        msg: [
          {title: 'msg01', id: 1},
          {title: 'msg02', id: 2},
          {title: 'msg03', id: 3},
          {title: 'msg04', id: 4}
        ]
      }
    }
  }

</script>
<style>

</style>
