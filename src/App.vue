<template>
  <div id="app">
    <Navi />
    <router-view></router-view>
  </div>
</template>

<script>
import Navi from './components/layouts/Nav.vue'
export default {
  name: 'App',
  components: {
    Navi,
  },
  methods: {
    log(e){
      console.log(e)
    },
    mounted() {
      console.log('wud?', this.questions)
    },
  },
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}

</style>
