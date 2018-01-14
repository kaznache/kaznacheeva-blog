<template>
  <div class="deletePost">
    <h1>{{ title }}</h1>
    <form>
      <div class="form-group">
        <label for="postId">Enter ID</label>
        <input v-model="postId" type="text" class="form-control" id="postId" placeholder="Post ID">
      </div>
      <button @click="deletePost()" class="btn btn-danger">Delete</button>
      <button @click="cancel()" class="btn btn-light">Cancel</button>
    </form>
    <div class="alert alert-danger" v-if="error">
      {{error}}
    </div>
    <div class="card" v-if="post">
      <div class="card-header">
        <small class="float-right">{{post.id}}</small>
        {{post.categories}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">{{post.content}}</p>
        <small class="float-right" hidden>{{post.id}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'deletePost',
  data () {
    return {
      title: 'Delete Post',
      postId: '',
      post: null,
      error: ''
    }
  },
  methods: {
    deletePost () {
      this.post = null
      this.error = ''
      if (!this.postId) {
        this.error = 'Enter smth!'
      }
      else {
        let uri = '/api/posts/';
        axios.delete(uri + this.postId)
        .then((response) => {
          this.post = response.data
          if (!this.post) {
            this.error = 'No such Id'
          } else {
            this.error = 'This post is deleted! You did it! Shame on you...'
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    cancel () {
      window.location.href = window.location.origin + '/#/allposts'
    }
  }
}
</script>
<style lang="css">
  .deletePost .card, .deletePost .alert {
    margin-top: 20px;
  }
</style>