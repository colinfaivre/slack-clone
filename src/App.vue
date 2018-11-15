<template>
  <div id="app">
    <div class="menu" :style="{ height: menuHeight}">
      <header>
        <div>
          <h1>My New team</h1>
          <div class="user">
            <i class="material-icons presence">fiber_manual_record</i>
            <div class="user-name">Damien</div>
          </div>
        </div>
        <i @click="toggleMenu()" class="material-icons menu-icon">menu</i>
      </header>

      <div v-if="menuIsOpen" class="channels">
        <router-link @click.native="toggleMenu()" to="/create-channel" class="no-outline">
          <div class="channels-header">
            <div class="channels-title">Channels</div>
            <i class="material-icons add-button">add_circle_outline</i>
          </div>
        </router-link>  
        <div class="channels-content">
          <router-link @click.native="toggleMenu()" class="green-focus user no-outline" v-for="(channel, index) in $store.state.channels" :to="{ name: 'channel', params: { channelTitle: channel.title } }">
            <div># {{ channel.title }}</div>
          </router-link>
        </div>
      </div>

      <div v-if="menuIsOpen" class="direct-messages">
        <router-link @click.native="toggleMenu()" to="/create-chat" class="no-outline">
          <div class="direct-messages-header">
            <div class="direct-messages-title">Direct messages</div>
            <i class="material-icons add-button">add_circle_outline</i>
          </div>
        </router-link>
        <div class="direct-messages-content">
          <router-link @click.native="toggleMenu()" class="user chat" v-for="(chat, index) in $store.state.chats" :to="{ name: 'chat', params: { chatTitle: chat.title } }">
            <i v-if="index === 0" class="material-icons presence">favorite</i>
            <i v-if="index === 1" class="material-icons presence">fiber_manual_record</i>
            <i v-if="index > 1" class="material-icons absence">panorama_fish_eye</i>
            <div class="user-name">{{ chat.title }}</div>
          </router-link>
        </div>
      </div>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      users: null,
      menuIsOpen: true,
      menuHeight: '100vh',
      windowWidth: 1000
    }
  },
  methods: {
    toggleMenu(){
      if(this.windowWidth < 600){
        this.menuIsOpen = !this.menuIsOpen
        if(this.menuIsOpen){
          this.menuHeight = '100vh'
        } else{
          this.menuHeight = '65px'
        }
      }
    }
  },
  computed: {
  
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
        if(this.windowWidth < 600){
          this.menuIsOpen = false
          this.menuHeight = '65px'
        } else {
          this.menuIsOpen = true
          this.menuHeight = '100vh'
        }
      });
    })
  },
}
</script>

<style>
#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
body{
  margin: 0px;
  padding: 0px;
}
.menu {
  background-color: #4d394a;
  width: 220px;
  height: 100vh;
  color: #c9c1c6;
  font-size: 15px;
  /* padding: 15px; */
}
.menu header{
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-icon{
  margin-right: 15px;
  font-size: 35px;
}
.user{
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.presence{
  color: #4c9689;
  font-size: 13px;
}
.absence{
  color: #909997;
  font-size: 13px;
}
.add-button{
  font-size: 18px;
}
.menu header:hover{
  background-color: #3e313c;
  cursor: pointer;
  color: white;
}
.menu h1{
  color: white;
  font-weight: 900;
  font-size: 17px;
  margin: 0px;
  padding-left: 15px;
  padding-right: 15px;
}
.user-name{
  padding-left: 5px;
}
.menu .channels-header, .menu .direct-messages-header{
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.menu .channels, .menu .direct-messages{
  padding-top: 18px;
}
.menu .channels-header, .menu .direct-messages-header{
  padding-left: 15px;
  padding-right: 15px;
}
.menu .channels-header:hover, .menu .direct-messages-header:hover{
  color: white;
  cursor: pointer;
  outline: 0;
}
.channel, .chat{
  padding-left: 15px;
  padding-right: 15px;
  outline: 0;
}
.no-outline{
  outline: 0;
}
.green-focus:hover, .chat:hover{
  background-color: #3e313c;
  cursor: pointer;
}
.green-focus:focus, .chat:focus{
  background-color: #4c9689;
  color: white;
}
a{
  text-decoration: none;
  color:inherit;
}
@media only screen and (max-width: 600px) {
  #app {
    flex-direction: column;
  }
  .menu {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .menu-icon{
    display: none;
  }
}

</style>
