<template>
  <div id="app">
    <h1>Blog API</h1>
    <a href=""></a>
    <ul>
      <li><router-link to="/allposts">Show All Posts</router-link></li>
      <li><router-link to="/createpost">Create Post</router-link></li>
      <li><router-link to="/findpost">Find Post By Id</router-link></li>
      <li><router-link to="/deletepost">Delete Post By Id</router-link></li>
    </ul>

    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
