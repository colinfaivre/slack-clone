import Vue from 'vue'
import Router from 'vue-router'
import Channel from './views/Channel.vue'
import CreateChat from './views/CreateChat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'channel',
      component: Channel
    },
    {
      path: '/create-chat',
      name: 'create-chat',
      component: CreateChat
    },
  ]
})
