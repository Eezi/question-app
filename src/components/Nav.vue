<template>
  <div class="nav">
<h1>Questions App</h1>
    <ul>
      
      <li>Home</li>
      <li>About</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'nav',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  background-color: #2c3e50;
  top: 0;
  position: absolute;
  left: 0;
}

h1 {
  float: left;
 color: #42b983;
margin: 0;
 padding: 0px 20px; 
 text-align: center;
font-family: 'Courier New', Courier, monospace;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #42b983;
  display: inline-block;
  padding:  0px 20px;
}
li:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
