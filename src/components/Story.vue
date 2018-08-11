<template>
  <div class="container story" v-if="session">
      <transition-group name="list" tag="p">
        <p class="paragraph"
           v-for="(paragraph, index) in session.paragraphs"
           v-bind:paragraph="paragraph"
           v-bind:key="index">
          {{ paragraph }}
        </p>
      </transition-group>
      <transition name="fade" v-on:leave="chosen">
        <b-button-toolbar class="choices" v-if="session.choices.length > 0">
          <div class="border">
              <b-button v-for="choice in session.choices"
                      v-bind:key="choice.text"
                      class="choice mx-1" :variant="color.next().value"
                      v-on:click="choose(choice)">
              {{choice.text}}
            </b-button>
          </div>
        </b-button-toolbar >
      </transition>
    <transition name="fade">
      <hr class="end" v-if="session.finished"/>
    </transition>
  </div>
</template>

<script>

let inkjs = require('inkjs')

function* colors () {
  let colorSet = ['primary', 'danger', 'warning', 'success', 'info']
  while (true) {
    for (var idx in colorSet) {
      yield colorSet[idx]
    }
  }
}

class Session {
  constructor (story) {
    let content = require('../assets/stories/' + story.file)
    this.story = new inkjs.Story(content)
    this.paragraphs = []
    this.choices = []
    this.finished = false
  }

  next () {
    while (this.story.canContinue) {
      this.paragraphs.push(this.story.Continue())
    }
    if (this.story.currentChoices.length > 0) {
      this.choices = [].concat(this.story.currentChoices)
    } else {
      this.finished = true
    }
  }

  choose (choice) {
    this.story.ChooseChoiceIndex(choice.index)
    this.choices = []
  }
}

export default {
  name: 'Story',
  data () {
    return {
      session: null,
      color: colors()
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
    },
    chosen: function (el, done) {
      this.session.next()
      done()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paragraph {
  font-size: 1.25rem;
}
.choice {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.choices {
  justify-content: center;
  align-items: center;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}
.border {
  padding: 1rem;
}

.end {
  text-align: center;
  margin-top: 3rem;
}

.end:after {
  font-size: 1.25rem;
  text-align: center;
  content: "The End";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  background: #FFFFF0;
  padding: 0 0.25em;
}

</style>
