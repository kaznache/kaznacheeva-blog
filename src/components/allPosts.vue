<template>
  <div class="allPosts">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="post in posts">dfghg</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'allPosts',
  data () {
    return {
      title: 'All Posts',
      posts: [1,2,3,4,5]
    }
  }
}
</script>