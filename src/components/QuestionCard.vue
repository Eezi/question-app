<template>
<div>
  <div class="card">
      <p>Question: </p>
  </div>
</div>     
</template>

<script>
export default {
props: ['askedQuestion'],
       
    data() {
        return {
            faqs: []
        }
    },


methods:{
    addQuestion() {

    }
}, 
components: {
    
}
}

</script>

<style>
    .card{
        margin: auto;
       
        height: 50px;
        border: 1px solid black;
        background-color: #42b983;
    }
</style>