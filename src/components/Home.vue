<template>
  <div>
    <b-jumbotron id="jumbo" bg-variant="warning" text-variant="dark">
      <template slot="header">
        <img src="@/assets/images/logo.png" />
      </template>
      <template slot="lead">
        <p class="subline">
          <i>Interactive stories for kids</i>
        </p>
      </template>
    </b-jumbotron>
    <div class="stories">
      <Catalogue :entries=stories />
    </div>
  </div>
</template>

<script>
import Catalogue from '@/components/Catalogue'
import Header from '@/components/Header'

import stories from '@/assets/stories'

export default {
  name: 'Home',
  components: {
    Catalogue, Header
  },
  data () {
    return {
      stories: stories
    }
  }
}
</script>

<style scoped>
  .subline {
    margin-left: 5em;
  }

  .section p {
    margin: 0;
  }

  .stories {

  }

  #jumbo {
    margin-bottom: 0;
  }
</style>
