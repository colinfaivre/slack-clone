<template>
  <div class="create-channel">
   <div class="center-box">
    <h1>Create a channel</h1>
    <p>Channels are where your members communicate. They’re best when organized around a topic — #leads, for example.</p>

    <form @submit.prevent="addChannel(newChannel)">
        <label>Name</label>
        <input autocomplete="off" autofocus class="message-input" type="text" name="text" v-model="newChannel" placeholder="New channel">
        <br>
        <p>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</p>
      </form>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  data() {
    return {
      channels: [],
      newChannel: null
    }
  },
  methods: {
    addChannel() {
      this.$store.commit('ADD_CHANNEL', this.newChannel)
      this.$router.push({ name: 'channel', params: { channelTitle: this.newChannel }})
      this.newChannel = null
    }
  }
}
</script>

<style scoped>
.create-channel{
  padding: 15px;
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
</style>