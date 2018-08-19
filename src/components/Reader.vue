
<template>
  <div v-if="story" class="surround flex-fill flex-column">
    <div class="page flex-fill align-content-center shadow-lg p-3">
      <h2 align="center">
        {{story.title}}
        <b-btn v-b-modal.credits variant="link" class="credits text-secondary">
          <icon name="info-circle" scale="1"/>
        </b-btn>
      </h2>
      <hr/>
      <Story class="story" :story=story />
      <b-modal id="credits" ok-only="true" title="Credits">
        <p>Hello World!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>

import Story from '@/components/Story'
import stories from '@/assets/stories'

export default {
  name: 'Reader',
  components: {
    Story
  },
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
  background-image: linear-gradient(to left top, #FFFFE0, #FFFFF0, #FFFFFF);
  max-width: 50rem;
  width: 100%;
  font-family: 'Bookman', 'Times New Roman', serif;
}

.story {
  padding: 10%;
}

.credits {
  padding-left:0;
}

</style>
