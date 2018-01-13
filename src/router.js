import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'allPosts',
      component: allPosts
    },
    {
      path: '/api/posts',
      name: 'allPosts',
      component: allPosts
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: findPost
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: createPost
    },
    {
      path: '/deletePost',
      name: 'deletePost',
      component: deletePost
    }
  ]
})
