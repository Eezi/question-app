<template>
  <div>
    <form @submit="handleQuestion">
        <textarea value="question" v-model="question" rows="10" cols="30">Type your question here.</textarea>
        <br><br>
        <input @click="handleQuestion" type="submit">
    </form>

  </div>
</template>

<script>
export default {
    data() {
    return{
        questions: [],
        question: ''
    }
    },
    methods: {
        handleQuestion(e) {
            e.preventDefault();
            const newQ = {
                question: this.question,
                id: this.questions.length + 1
            }
            this.questions.push(newQ);
            console.log('kyssäri', this.questions)
            this.$emit('questions', this.questions)
            this.question = '';
        }
    }

}
</script>

<style>

</style>