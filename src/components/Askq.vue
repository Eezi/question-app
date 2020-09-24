<template>
  <div>
    <form @submit="handleQuestion">
       <h5> Type your question here.</h5>
        <textarea value="question" v-model="question" rows="10" cols="30"></textarea>
        <br><br>
        <input @click="handleQuestion" type="submit">
    </form>

  </div>
</template>

<script>
//import QuestionCard from './QuestionCard.vue'
export default {
    name: "askq",
    data() {
    return{
        questions: [],
        question: '',
        wholeQuestion: {}
    }
    },
    methods: {
        handleQuestion(e) {
            e.preventDefault();
            const newQ = {
                title: this.question,
                id: Date.now(),
                createdAt: new Date()
            }
            console.log(newQ)
            this.$emit('add-item', newQ)
            this.question = '';
        }
    },
    components: {
        
    }

}
</script>

<style>
form{
    text-align: center;
}
</style>