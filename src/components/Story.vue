<template>
  <div class="story" v-if="session">
    <transition-group name="fade">
      <p v-for="(paragraph, index) in session.paragraphs"
         v-bind:paragraph="paragraph"
         v-bind:key="index">
        {{ paragraph }}
      </p>
    </transition-group>
    <div v-if="session.choices"
         v-for="choice in session.choices"
         v-bind:key="choice.text">
      <button
        v-on:click="choose(choice)">{{choice.text}}</button>
    </div>
  </div>
</template>

<script>

let inkjs = require('inkjs')

class Session {
  constructor (story) {
    let content = require('../assets/stories/' + story.file)
    this.story = new inkjs.Story(content)
    this.paragraphs = []
    this.choices = []
  }

  next () {
    while (this.story.canContinue) {
      this.paragraphs.push(this.story.Continue())
    }
    this.choices = []
    if (this.story.currentChoices.length > 0) {
      this.choices = [].concat(this.story.currentChoices)
    } else {
      this.paragraphs.push('~ The End ~')
    }
  }

  choose (choice) {
    this.story.ChooseChoiceIndex(choice.index)
    this.next()
  }
}

export default {
  name: 'Story',
  data () {
    return {
      session: null
    }
  },
  props: {
    story: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.session = new Session(this.story)
    this.session.next()
  },
  methods: {
    choose: function (choice) {
      this.session.choose(choice)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
