<template>
  <div id="app">
    <img id="logo" src="./assets/images/logo.png">
    <div class="story">
      <Story/>
    </div>
  </div>
</template>

<script>

import Story from './components/Story.vue'

export default {

  name: 'app',
  components: {
    Story
  }

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background: linear-gradient(315deg, #8cd9b3, #ffffe6);
  background-repeat: no-repeat;
  height: 100%;
}

html {
  height: 100%;
}

#logo {
  float: left;
  margin-left: 1%;
  margin-top: 2%;
  transform: rotate(-10deg);
}

.story {
  margin: 0px;
  clear: both;
}

</style>
