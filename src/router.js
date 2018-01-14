import Vue from 'vue'
import VueRouter from 'vue-router'
import allPosts from './components/allPosts'
import createPost from './components/createPost'
import findPost from './components/findPost'
import deletePost from './components/deletePost'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: allPosts
    },
    {
      path: '/allposts',
      name: 'allPosts',
      component: allPosts
    },
    {
      path: '/createpost',
      name: 'createPost',
      component: createPost
    },
    {
      path: '/findpost',
      name: 'findPost',
      component: findPost
    },
    {
      path: '/deletepost',
      name: 'deletePost',
      component: deletePost
    }
  ]
})
