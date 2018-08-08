<template>
  <div class="container story" v-if="session">
      <transition-group name="list" tag="p" mode="out-in">
      <p class="paragraph"
         v-for="(paragraph, index) in session.paragraphs"
         v-bind:paragraph="paragraph"
         v-bind:key="index">
        {{ paragraph }}
      </p>
      <div class="row"
           v-if="session.choices"
           v-for="choice in session.choices"
           v-bind:key="choice.text">
        <b-button class="choice mx-auto" variant="primary"
                  v-on:click="choose(choice)">
          <b>{{choice.text}}</b>
        </b-button>
      </div>
    </transition-group>
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
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.paragraph {
  font-size: 1.25rem;
}
.choice {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0.25rem;
  display: inline-block;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
