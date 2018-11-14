import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: [
      'super-channel',
      'autre-channel'
    ],
    chat: [
      'Slack bot',
      'Damien (You)',
      'Colin'
    ]
  },
  mutations: {
    ADD_CHANNEL(state, newChannel) {
      state.channels.push(newChannel)
    },
    ADD_CHAT(state, newChat) {
      state.chat.push(newChat)
    },
  },
  actions: {

  }
})
