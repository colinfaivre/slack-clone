<template>
  <div id="app">
    <div class="menu">
      
      <header>
        <h1>My New team</h1>
        <div class="user">
          <i class="material-icons presence">fiber_manual_record</i>
          <div class="user-name">Damien</div>
        </div>
      </header>

      <div class="channels">
        <div class="channels-header">
          <div class="channels-title">Channels</div>
          <i class="material-icons add-button">add_circle_outline</i>
        </div>
        <div class="channels-content">
          <div># super-channel</div>
          <div># autre-channel</div>
        </div>
      </div>

      <div class="direct-messages">
        <div class="direct-messages-header">
          <div class="direct-messages-title">Direct messages</div>
          <i class="material-icons add-button">add_circle_outline</i>
        </div>
        <div class="direct-messages-content">
          <div class="user">
            <i class="material-icons presence">favorite</i>
            <div class="user-name">Slack bot</div>
          </div>
          <div class="user">
            <i class="material-icons presence">fiber_manual_record</i>
            <div class="user-name">Damien (You)</div>
          </div>
          <div class="user">
            <i class="material-icons absence">panorama_fish_eye</i>
            <div class="user-name absence">Colin</div>
          </div>
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
.menu header{
  padding-top: 10px;
  padding-bottom: 5px;
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
  font-size: 1rem;
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
