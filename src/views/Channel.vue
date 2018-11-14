<template>
  <div class="specific-channel">
   {{ $route.params.channelTitle }}
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
      messages: [],
      newMessage: null
    }
  },
  methods: {
    addMessage() {
      this.$store.commit('ADD_MESSAGE', this.newMessage)
      this.newMessage = null
    }
  }
}
</script>

<style scoped>
.specific-channel{
  padding: 15px;
}
</style>