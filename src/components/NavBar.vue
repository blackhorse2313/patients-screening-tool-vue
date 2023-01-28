<template>
  <div class="WelcomeAlert">
    <b-navbar toggleable="md" type="dark" variant="info">
      <router-link tag="b-navbar-brand" style="cursor:pointer;" to="/">Patients screening tool</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="b-nav-item" to="/" exact-active-class="active">Home</router-link>
          <router-link tag="b-nav-item" to="/about" exact-active-class="active">About</router-link>
          <b-nav-item href="https://github.com/Mohd-PH/patients-screening-tool-vue" target="_blank"><b-icon icon="github"></b-icon> Github</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
