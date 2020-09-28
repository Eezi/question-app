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
       async handleQuestion(e) {
            e.preventDefault();
            axios.post(`http://localhost:9999/api/v1/faqs/`, {
        body: this.postBody
        })
        .then(response => {

        })
        .catch(e => {
        this.errors.push(e)
        })
            const newQ = {
                title: this.question,
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