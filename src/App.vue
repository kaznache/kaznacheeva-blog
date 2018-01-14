<template>
  <div id="app" class="container">
    <h1>Blog API</h1>
    <div class="btn-group header" role="group">
      <button type="button" class="btn btn-secondary">
        <router-link to="/allposts">Show All Posts</router-link>
      </button>
      <button type="button" class="btn btn-secondary">
        <router-link to="/createpost">Create Post</router-link>
      </button>
      <button type="button" class="btn btn-secondary">
        <router-link to="/findpost">Find Post By Id</router-link>
      </button>
      <button type="button" class="btn btn-secondary">
        <router-link to="/deletepost">Delete Post By Id</router-link>
      </button>
    </div>

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
<style lang="css">
  .header a {
    color: #fff;
  }
  .header a:hover {
    text-decoration: none;
  }
  .header {
    margin-bottom: 20px;
  }
</style>
