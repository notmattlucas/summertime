<template>
  <div>
    <b-navbar class="header" toggleable="md" variant="dark" type="dark" >
      <b-navbar-nav>
        <transition name="fade">
          <b-nav-item v-if="$route.name !== 'home'">
            <router-link class="text-warning" to="/">
              <icon name="arrow-circle-left" scale="2"/>
            </router-link>
          </b-nav-item>
        </transition>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link class="text-warning" to="/about">About</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  height: 4rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
