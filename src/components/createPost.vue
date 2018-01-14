<template>
  <div class="createPost">
    <h1>{{ title }}</h1>

    <form>
      <div class="form-group">
        <label for="Title">Title</label>
        <input v-model="post.title" type="text" class="form-control" id="Title" placeholder="Title" autofocus>
      </div>
      <div class="form-group">
        <label for="Categories">Categories</label>
        <input v-model="post.categories" type="text" class="form-control" id="Categories" placeholder="Categories">
      </div>
      <div class="form-group">
        <label for="Content">Content</label>
        <textarea v-model="post.content" class="form-control" id="Content" placeholder="Content"></textarea>
      </div>
      <button @click="savePost()" class="btn btn-success">Save</button>
      <button @click="cancel()" class="btn btn-light">Cancel</button>
    </form>

  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'createPost',
  data () {
    return {
      title: 'Create Post',
      post: {
        title: '',
        categories: '',
        content: '',
        id: ''
      },
      uri: '/api/posts',
      id: ''
    }
  },
  mounted () {
    axios.get(this.uri)
    .then((response) => {
      if (response.data.length !== 0) {
        let lastPost = _.max(response.data, (post) => { return post.id; });
        this.id = JSON.stringify(Number(lastPost.id) + 1);
      } else {
        this.id = '1'
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  methods: {
    savePost () {
      this.post.id = this.id
      axios.post(this.uri, this.post)
      .then((response) => {
        window.location.href = window.location.origin + '/#/allposts'
      })
      .catch((err) => {
        console.log(err)
      })
    },
    cancel () {
      window.location.href = window.location.origin + '/#/allposts'
    }
  }
}
</script>
<style lang="css">
  .__margin-bottom_m {
    margin-bottom: 20px;
  }
</style>
