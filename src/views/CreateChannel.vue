<template>
  <div class="channel">
   Create Channel
   <br><br>

   <form @submit.prevent="addChannel(newChannel)">
      <input type="text" name="text" v-model="newChannel" placeholder="New channel">
      <br>
      <button>Add channel</button>
    </form>
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
      this.newChannel = null
    }
  }
}
</script>

<style>
.channel{
  padding: 15px;
}
</style>