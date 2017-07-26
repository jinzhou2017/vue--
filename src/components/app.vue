<template>
  <div class="wrap">
    <div class="menu">
      <div class="link">
        <router-link to="/about">about</router-link>
      </div>
      <div class="link">
        <router-link to="/home">home</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>


  </div>




</template>
<script>
  export default {}

</script>
<style>
  .wrap{
    vertical-align: baseline;
  }
.menu{
  margin-left: 100px;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, .2);
  font-size: 20px;
  float: left;

}
.link{
  width: 100%;
  height: 50px;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  border: 1px solid rgba(73, 243, 255, 0.2);
  border-shadow: 0 0  1px 1px;
}
.content{
  margin-left: 20px;
  width: 300px;
  /*height: 100px;*/
  border: 1px solid rgba(0, 0, 0, .2);
  font-size: 20px;
  float: left;
}
</style>
