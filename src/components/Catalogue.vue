<template>
  <div class="catalogue">
    <ul v-for="entry in entries" v-bind:key="entry.id">
      <li><button v-on:click="open(entry)">{{entry.title}}</button></li>
    </ul>
    <Modal v-if=story>
      <template slot="content">
        <Story :story=story />
      </template>
    </Modal>
  </div>
</template>

<script>

import Story from './Story'
import Modal from './Modal'

export default {
  name: 'Catalogue',
  components: {
    Modal, Story
  },
  data () {
      return {
          story: null
      }
  },        
  props: {
    entries: {
      type: Array,
      required: true
    }
  },
  methods: {
    open: function(entry) {
      this.story = entry
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
