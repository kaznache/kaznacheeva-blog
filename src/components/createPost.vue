<template>
  <div class="createPost">
    <h1>{{ title }}</h1>
    <h2>Title</h2>
    <div class="__margin-bottom_m">
      <input type="text" v-model="post.title" />
    </div>
    <div class="__margin-bottom_m">
      <input type="text" v-model="post.categories" />
    </div>
    <div class="__margin-bottom_m">
      <textarea name="postText" id="postText" cols="30" rows="10" v-model="post.content"></textarea>
    </div>
    <button @click="savePost()">Save</button>
  </div>
</template>

<script>
export default {
  name: 'createPost',
  data () {
    return {
      title: 'Create Post',
      post: {
        title: '',
        categories: '',
        content: ''
      }
    }
  },
  methods: {
    savePost () {
      console.log(this.post)
    }
  }
}
</script>
<style lang="css">
  .__margin-bottom_m {
    margin-bottom: 20px;
  }
</style>
