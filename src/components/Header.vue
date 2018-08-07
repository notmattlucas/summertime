<template>
  <div>
    <b-navbar toggleable="md" variant="dark" type="dark" >
      <b-navbar-nav>
        <b-nav-item >
          <router-link to="/">
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
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
