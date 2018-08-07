<template>
  <div v-if="story" class="surround flex-fill flex-column">
    <div class="page flex-fill align-content-center shadow-lg p-3">
      <h2 align="center">{{story.title}}</h2>
      <hr/>
    </div>
  </div>
</template>

<script>

import stories from '@/assets/stories'

export default {
  name: 'Reader',
  data () {
    return {
      story: null
    }
  },
  mounted () {
    this.story = stories[this.$route.params.id]
  }
}
</script>

<style scoped>
.surround {
  display: flex;
  background-color: #B0C4DE;
  align-items: center;
  justify-content: center;
}

.page {
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: #FFFFF0;
  background-image: linear-gradient(to left top, #FFFFF0, #FFFFFF);
  max-width: 50rem;
  width: 100%;
  font-family: 'Bookman', 'Times New Roman', serif;
}

</style>
