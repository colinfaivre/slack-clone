import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: [
      {
        title: 'super-channel',
        messages: []
      },
      {
        title: 'other-channel',
        messages: []
      }
    ],
    chats: [
      {
        title: 'Slack bot',
        messages: []
      },
      {
        title: 'Damien (You)',
        messages: []
      },
      {
        title: 'Colin',
        messages: []
      }
    ]
  },
  mutations: {
    ADD_CHANNEL(state, newChannel) {
      state.channels.push({
        title: newChannel,
        messages: []
      })
    },
    ADD_CHAT(state, newChat) {
      state.chats.push({
        title: newChat,
        messages: []
      })
    },
  },
  actions: {

  }
})
