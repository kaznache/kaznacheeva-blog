<template>
  <div class="allPosts">
    <h1>{{ title }}</h1>
    <div class="card-deck">
      <div class="card" v-for="(post,index) in posts">
        <div class="card-header">
          <small class="float-right">{{post.id}}</small>
          {{post.categories}}
        </div>
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{post.content}}</p>
          <small class="float-right" hidden>{{post._id}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'allPosts',
  data () {
    return {
      title: 'All Posts',
      posts: Array,
      uri: '/api/posts'
    }
  },
  mounted () {
    axios.get(this.uri)
    .then((response) => {
      this.posts = response.data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style lang="css">
  .allPosts .card{
    min-width: 300px;
    margin-bottom: 30px;
  }
</style>
