<template>
  <div class="catalogue">
    <ul v-for="entry in entries" v-bind:key="entry.id">
      <li><button>{{entry.title}}</button></li>
      <Modal/>
    </ul>
  </div>
</template>

<script>

import Modal from './Modal'

export default {
  name: 'Catalogue',
  components: {
    Modal
  },
  props: {
    entries: {
      type: Array,
      required: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
