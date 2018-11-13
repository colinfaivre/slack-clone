<template>
  <div id="app">
    <div class="menu">
      <header>
        <h1>My New team</h1>
        <div class="user-name">Colin Faivre</div>
      </header>
      <div class="channels">
        <div class="channels-title">Channels</div>
        <div class="channels-content">
          <div># super-channel</div>
          <div># autre-channel</div>
        </div>
      </div>
      <div class="direct-messages">
        <div class="direct-messages-title">Direct messages</div>
        <div class="direct-messages-content">
          <div>Marine</div>
          <div>Colin</div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

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
.menu header:hover{
  background-color: #3e313c;
  cursor: pointer;
  color: white;
}
.menu h1{
  color: white;
  font-weight: 900;
  font-size: 1rem;
  margin: 0px;
  padding-left: 15px;
  padding-right: 15px;
}
.user-name{
  padding-left: 15px;
  padding-right: 15px;
}
.menu .channels, .menu .direct-messages{
  padding-top: 18px;
}
.menu .channels-title, .menu .direct-messages-title{
  padding-left: 15px;
  padding-right: 15px;
}
.menu .channels-title:hover, .menu .direct-messages-title:hover{
  color: white;
  cursor: pointer;
}
.menu .channels-content > div, .menu .direct-messages-content > div{
  padding-left: 15px;
  padding-right: 15px;
}
.menu .channels-content > div:hover, .menu .direct-messages-content > div:hover{
  background-color: #3e313c;
  cursor: pointer;
}
router-view{

}
</style>
