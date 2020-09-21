<template>
  <div class="questions">
      <h1>Sended Questions</h1>
      
      <div>
        <div>
            <Askq v-on:add-item="addQuestion" />
            <QuestionCard  />

        </div>
    </div>  
      <button @click="log">mikä</button>
  </div>
</template>

<script>
import QuestionCard from './QuestionCard.vue'

import Askq from './Askq.vue'
export default {
    data(){
        return{
            questions: []
        }
    },
    components: {
        QuestionCard,
        Askq
    },
    props: ['newQ'],
    methods: {
    addQuestion(newQ) {
        this.questions.push(newQ)
    },
    log(){
        console.log(this.questions)
    }
    }
}

</script>

<style>
.questions{
    
  
  margin-top: 50px;
  background-color: #2c3e50;
  color: #fff;
  height: 100px;

}
</style>