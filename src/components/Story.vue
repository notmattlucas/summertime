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

function readStory(data) {
  while (story.canContinue) {
    data.paragraphs.push(story.Continue())
  }
  console.log(story.currentChoices)
  data.choices = []  
  if (story.currentChoices.length > 0) {
    data.choices = [].concat(story.currentChoices)
  } else {
    data.paragraphs.push("~ The End ~");
  }
}

export default {
  name: 'Story',
  data () {
    return {
      paragraphs: [],
      choices: []
    }
  },
  mounted () {
    readStory(this.$data)
  },
  methods: {
    choose: function (choice) {
        story.ChooseChoiceIndex(choice.index)
        readStory(this.$data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
