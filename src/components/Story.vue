<template>
  <div class="story">
    <p v-for="(paragraph, index) in paragraphs"
       v-bind:paragraph="paragraph"
       v-bind:key="index">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>

import story from '../story.js'

export default {
  name: 'Story',
  data () {
    return {
      paragraphs: []
    }
  },
  mounted () {
    console.log(this)
    while (story.canContinue) {
      this.paragraphs.append(story.Continue())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
