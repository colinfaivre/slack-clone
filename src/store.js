import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: [
      'super-channel',
      'autre-channel'
    ],
  },
  mutations: {
    ADD_CHANNEL(state, newChannel) {
      state.channels.push(newChannel)
    },
  },
  actions: {

  }
})
