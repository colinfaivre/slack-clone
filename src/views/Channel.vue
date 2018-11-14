<template>
  <div class="specific-channel">
   <h1>#{{ $route.params.channelTitle }}</h1>
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
  name: 'Channel',
  data() {
    return {
      newMessage: null
    }
  },
  methods: {
    addMessage() {
      const payload = { channelTitle: this.$route.params.channelTitle, content: this.newMessage }
      this.$store.commit('ADD_CHANNEL_MESSAGE', payload)
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
  width: calc(100% - 220px);
}
h1{
  color: black;
  font-weight: 900;
  font-size: 17px;
  margin: 0px;
  padding-top: 8px;
  padding-left: 18px;
  padding-right: 10px;
  padding-bottom: 32px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgb(228, 228, 228);
  /* background-color: red; */

  width: 100%;
}
</style>