<template>
  <div class="specific-chat">
   {{ $route.params.chatTitle }}
   <br><br>
   <div v-for="message in messages" class="message-content">{{ message }}</div>
   <form @submit.prevent="addMessage(newMessage)">
      <input type="text" name="text" v-model="newMessage" placeholder="New message">
      <br>
      <button>Add message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      newMessage: null
    }
  },
  methods: {
    addMessage() {
      const payload = { chatTitle: this.$route.params.chatTitle, content: this.newMessage }
      this.$store.commit('ADD_CHAT_MESSAGE', payload)
      this.newMessage = null
    }
  },
  computed: {
    messages: function() {
      const currentChat = this.$store.state.chats.findIndex(x => x.title === this.$route.params.chatTitle)
      return this.$store.state.chats[currentChat].messages
    }
  }
}
</script>

<style scoped>
.specific-chat{
  padding: 15px;
}
</style>