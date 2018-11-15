<template>
  <div class="specific-channel">
    <h1>#{{ $route.params.channelTitle }}</h1>
   
    <div class="single-message" v-for="message in messages">
      <img class="avatar" src="https://ca.slack-edge.com/TE2ALC8KZ-UE0GVJBKJ-g0307153ee5b-72">
      <div class="message-text">
        <div class="userName">
          Damien
        </div>
        <div class="message-content">
          {{ message }}
        </div>
      </div>
    </div>
   
   <form @submit.prevent="addMessage(newMessage)">
      <input autocomplete="off" autofocus class="message-input" type="text" name="text" v-model="newMessage" :placeholder="'Message #' + $route.params.channelTitle">
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
      if (this.newMessage){
        const payload = { channelTitle: this.$route.params.channelTitle, content: this.newMessage }
        this.$store.commit('ADD_CHANNEL_MESSAGE', payload)
        this.newMessage = null
      }
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
  position: relative;
}
h1{
  color: black;
  font-weight: 900;
  font-size: 17px;
  margin: 0px;
  padding-top: 8px;
  padding-left: 18px;
  padding-bottom: 32px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgb(228, 228, 228);
  width: calc(100% - 18px);
}
form {
  width: 95%;
  margin-left: 2%;
  margin-right: 2%;
  position: absolute;
  bottom: 20px;
}
.message-input{
  border-style: solid;
  border-color: grey;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  width: calc(100% - 10px);
  font-size: 15px;
  color: rgb(59, 59, 59);
}
input::-webkit-input-placeholder {
  color: rgb(170, 170, 170) !important;
}
input:focus{
    outline: none;
}
.avatar{
  width: 40px;
  border-radius:5px;
}
.single-message{
  display: flex;
  height: 40px;
  margin-left: 19px;
  margin-top: 15px;
}
.message-text{
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 14px;
}
.userName{
  color:black;
  font-weight: 600;
  
}
@media only screen and (max-width: 600px) {
  .specific-channel {
    width: 100%;
    height: calc(100vh - 60px);
  }
  form {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
  bottom: 20px;
}
}
</style>