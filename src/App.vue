<template>
  <div id="app">
    <Header :showHome=false />
    <b-jumbotron id="jumbo" bg-variant="warning" text-variant="dark">
      <template slot="header">
        <img src="./assets/images/logo.png" />
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

import Catalogue from './components/Catalogue'
import Header from './components/Header'

import stories from './assets/stories'

export default {
  name: 'App',
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

body {
  margin: 0;
  height: 100%;
}

html {
  height: 100%;
}

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
