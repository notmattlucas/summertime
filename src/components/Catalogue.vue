<template>
  <div class="catalogue">
    <ul v-for="entry in entries" v-bind:key="entry.id">
      <li>{{entry.title}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Catalogue',
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
