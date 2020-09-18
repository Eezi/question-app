<template>
  <div id="app">
    
    <Nav />

    <Chat/>
    <div v-bind:key="que.id" v-for="que in questions">{{que}}</div>
    <button @click="log(questions)">Mikä</button>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Chat from './components/Chat.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Chat
  },
  methods: {
    log(e){
      console.log(e)
    },
    mounted() {
      console.log('wud?', this.questions)
    },
  },
  props:['questions']

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
