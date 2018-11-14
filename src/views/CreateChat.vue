<template>
  <div class="chat">
   Create Chat
   <br><br>

   <form @submit.prevent="addChat(newChat)">
      <input type="text" name="text" v-model="newChat" placeholder="New chat">
      <br>
      <button>Add chat</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      chats: [],
      newChat: null
    }
  },
  methods: {
    addChat() {
      this.$store.commit('ADD_CHAT', this.newChat)
      this.newChat = null
    }
  }
}
</script>

<style>
.chat{
  padding: 15px;
}
</style>