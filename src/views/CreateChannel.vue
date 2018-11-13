<template>
  <div class="channel">
   Create Channel
   <br><br>

   <form @submit.prevent="addChannel(newChannel)">
      <label for="channel">New channel</label>
      <br>
      <input type="text" name="text" v-model="newChannel">
      <br>
      <button>Create channel</button>
    </form>
    {{ channels }}
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
    addChannel(newChannel) {
      this.channels.push(newChannel)
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