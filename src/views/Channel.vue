<template>
  <div class="specific-channel">
   # {{ $route.params.channelTitle }}
   <br><br>
   <div v-for="message in messages" class="message-content">{{ message }}</div>
   <br><br> 
   <form @submit.prevent="addMessage(newMessage)">
      <input type="text" name="text" v-model="newMessage" placeholder="New message">
      <br>
      <button>Add message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  data() {
    return {
      newMessage: null
    }
  },
  methods: {
    addMessage() {
      const payload = { channelTitle: this.$route.params.channelTitle, content: this.newMessage }
      this.$store.commit('ADD_MESSAGE', payload)
      console.log(payload)
      this.newMessage = null
    }
  },
  computed: {
    messages: function() {
      const currentChannel = this.$store.state.channels.findIndex(x => x.title === this.$route.params.channelTitle)
      return this.$store.state.channels[currentChannel].messages
    }
  }
}
</script>

<style scoped>
.specific-channel{
  padding: 15px;
}
</style>