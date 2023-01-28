<template>
  <div id="app">
    <NavBar></NavBar>
    <WelcomeAlert></WelcomeAlert>
    <div class="routerView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import WelcomeAlert from './components/WelcomeAlert'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    WelcomeAlert,
    NavBar
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

.routerView {
  padding-top: 30px;
}
</style>
