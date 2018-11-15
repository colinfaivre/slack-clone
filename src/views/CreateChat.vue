<template>
  <div class="create-channel">
   <div class="center-box">
    <h1>Direct Messages</h1>

    <form @submit.prevent="addChat(newChat)">
        <input autocomplete="off" autofocus class="message-input" type="text" name="text" v-model="newChat" placeholder="Sart conversation">
    </form>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  data() {
    return {
      chats: [],
      newChat: null
    }
  },
  methods: {
    addChat() {
      this.$store.commit('ADD_CHAT', this.newChat)
      this.$router.push({ name: 'chat', params: { chatTitle: this.newChat }})
      this.newChat = null
    }
  }
}
</script>

<style scoped>
.create-channel{
  /* padding: 15px; */
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  color: black;

}
.center-box{
  height: 50vh;
  width: 45vw;
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
  margin-top: 5px;
}
input::-webkit-input-placeholder {
  color: rgb(170, 170, 170) !important;
}
input:focus{
    outline: none;
}
label{
  color: black;
  font-weight: 500;
}
p{
  color: grey;
  font-size: 14px;
}
@media only screen and (max-width: 600px) {
  .center-box{
    height: 70vh;
    width: 80vw;
  }
}
</style>