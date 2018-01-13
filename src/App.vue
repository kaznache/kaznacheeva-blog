<template>
  <div id="app">
    <h1>Blog API</h1>
    <a href=""></a>
    <router-link to="/foo">Go to Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import helloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    helloWorld
  }
}
</script>

<style>
</style>
