<template>
   <div id="app">
    <router-view name="header"></router-view>
    <router-view name="footer"></router-view>
    <router-view name="main"></router-view>
     <router-view name="newout"></router-view>
     <router-view name="test"></router-view>
    
  </div> 
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
