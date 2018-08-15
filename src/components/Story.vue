<template>
  <div class="container story" v-if="session">
      <transition-group name="list" tag="p">
        <div v-for="(atom, index) in session.atoms"
             v-bind:key="index">

          <p class="paragraph"
             v-if="atom.type === AtomType.PARAGRAPH"
             v-bind:key="index">
            {{ atom.content }}
          </p>

          <p class="equation"
             v-if="atom.type === AtomType.EQUATION">
            {{ atom.equation }}
          </p>

          <p class="icon"
             v-if="atom.type == AtomType.ANSWER">
            <icon class="text-success" v-if="atom.answer === 'right'" name="check" scale="3" />
            <icon class="text-danger" v-if="atom.answer === 'wrong'" name="times" scale="3" />
          </p>

          <b-button-toolbar class="choices" v-if="atom.type === AtomType.CHOICE">
            <div class="border">
              <b-button v-for="choice in atom.choices"
                        v-bind:key="choice.text"
                        class="choice mx-1" :variant="color.next().value"
                        v-on:click="choose(choice)">
                {{choice.text}}
              </b-button>
            </div>
          </b-button-toolbar >

          <b-img v-if="atom.type === AtomType.IMAGE"
            :src="image(atom.image)"
          />
        </div>
      </transition-group>
      <!--<transition name="fade" v-on:leave="chosen">-->

      <!--</transition>-->
    <transition name="fade">
      <div v-if="session.finished">
        <hr class="end"/>
        <div class="end-routes">
          <router-link class="text-secondary" to="/">
            <icon name="arrow-circle-left" scale="4"/>
          </router-link>
        </div>
      </div>
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

let AtomType = Object.freeze({
  'PARAGRAPH': 1,
  'CHOICE': 2,
  'IMAGE': 3,
  'EQUATION': 4,
  'ANSWER': 5
})

class ParagraphAtom {
  constructor (content) {
    this.type = AtomType.PARAGRAPH
    this.content = content
  }
}

class ChoiceAtom {
  constructor (choices) {
    this.type = AtomType.CHOICE
    this.choices = choices
  }
}

class ImageAtom {
  constructor (tag) {
    this.type = AtomType.IMAGE
    let match = /img:\s*(.+)/.exec(tag)[1]
    this.image = match.trim()
  }
}

class EquationAtom {
  constructor (tag) {
    this.type = AtomType.EQUATION
    let match = /eq:\s*(.+)/.exec(tag)[1]
    this.equation = match.trim()
  }
}

class AnswerAtom {
  constructor (tag) {
    this.type = AtomType.ANSWER
    let match = /answer:\s*(.+)/.exec(tag)[1]
    this.answer = match.trim()
  }
}

class Session {
  constructor (story) {
    let content = require('../assets/stories/' + story.file)
    this.story = new inkjs.Story(content)
    this.atoms = []
    this.finished = false
  }

  next () {
    while (this.story.canContinue) {
      let content = this.story.Continue()
      let paragraph = new ParagraphAtom(content)
      this.handleTags(this.story.currentTags)
      this.atoms.push(paragraph)
    }
    if (this.story.currentChoices.length > 0) {
      let content = this.story.currentChoices
      let choice = new ChoiceAtom(content)
      this.atoms.push(choice)
    } else {
      this.finished = true
    }
  }

  choose (choice) {
    this.atoms.pop()
    this.story.ChooseChoiceIndex(choice.index)
  }

  handleTags (tags) {
    for (let idx in tags) {
      let tag = tags[idx]
      if (tag === 'question' || tag === 'chapter') {
        while (this.atoms.length > 0) {
          this.atoms.pop()
        }
      } else if (tag.startsWith('img')) {
        this.atoms.push(new ImageAtom(tag))
      } else if (tag.startsWith('eq')) {
        this.atoms.push(new EquationAtom(tag))
      } else if (tag.startsWith('answer')) {
        this.atoms.push(new AnswerAtom(tag))
      }
    }
  }
}

export default {
  name: 'Story',
  data () {
    return {
      session: null,
      color: colors(),
      AtomType: AtomType
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
      this.session.next()
    },
    image: function (path) {
      return '/static/images/' + path
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

.end-routes {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
}

.story img {
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.equation {
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.icon {
  text-align: center;
}

</style>
