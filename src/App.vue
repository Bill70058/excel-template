<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div style="width:500px; display:flex;margin:0 auto;justify-content:space-between;">
      <upload-excel></upload-excel>
      <down-excel></down-excel>
    </div>
  </div>
</template>

<script>
import DownExcel from './components/downExcel.vue'
import UploadExcel from './components/uploadExcel.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    UploadExcel,
    DownExcel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
