<template>
  <div class="story">
    <p v-for="(paragraph, index) in paragraphs"
       v-bind:paragraph="paragraph"
       v-bind:key="index">
      {{ paragraph }}
    </p>
    <div v-if="choices"
         v-for="choice in choices"
         v-bind:key="choice.text">
      <button
        v-on:click="choose(choice)">{{choice.text}}</button>
    </div>
  </div>
</template>

<script>

import story from '../story.js'

export default {
  name: 'Story',
  data () {
    return {
      paragraphs: [],
      choices: []
    }
  },
  mounted () {
    while (story.canContinue) {
      this.$data.paragraphs.push(story.Continue())
    }
    console.log(story.currentChoices)
    if (story.currentChoices) {
      this.$data.choices = [].concat(story.currentChoices)
    }
  },
  methods: {
    choose: function (choice) {
      alert(choice)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
