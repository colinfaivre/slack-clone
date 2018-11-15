import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateChat from './views/CreateChat.vue'
import CreateChannel from './views/CreateChannel.vue'
import Channel from './views/Channel.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'create-channel' }
    },
    {
      path: '/create-chat',
      name: 'create-chat',
      component: CreateChat
    },
    {
      path: '/create-channel',
      name: 'create-channel',
      component: CreateChannel
    },
    {
      path: '/channels/:channelTitle',
      name: 'channel',
      component: Channel
    },
    {
      path: '/chats/:chatTitle',
      name: 'chat',
      component: Chat
    },
  ]
})
