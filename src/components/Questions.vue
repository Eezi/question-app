<template>
<div class="container">
  <div class="questions">
      <h1>Sended Questions</h1>
      <ul :key="que.id" v-for="que in questions">
           <li @click="deleteQuestion(que.id)">{{que.title}}</li>
      </ul>   
  </div>
   <Askq v-on:add-item="addQuestion" />
</div> 
</template>

<script>
//import QuestionCard from './QuestionCard.vue'

import Askq from './Askq.vue'
export default {
    data(){
        return{
            questions: []
        }
    },
    components: {
      //  QuestionCard,
        Askq
    },
    props: ['newQ'],
    methods: {
    addQuestion(newQ) {
        this.questions.push(newQ)
    },
    deleteQuestion(index) {
        console.log(index)
        this.questions.splice(index, 1);
    }
    
    }
}

</script>

<style>
.questions{
    
  
  margin-top: 0px;
  background-color: #2c3e50;
  color: rgb(9, 240, 113);
  width: 100%;

}
.container{
    display: flex;
}
</style>