<template>
  <div>
    <b-navbar toggleable="md" variant="dark" type="dark" >
      <b-navbar-nav v-if=showHome>
        <b-nav-item >
          <router-link to="home">
            <icon name="arrow-circle-left" scale="2"/>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/about">About</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    showHome: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
</style>
