<template>
  <div id="app">
    <div class="menu">
      <h1>My New team</h1>
      <div class="user-name">Colin Faivre</div>
      <div class="channels">
        <div class="channels-title">Channels</div>
        <div class="channels-content">
          # super-channel <br>
          # autre-channel 
        </div>
      </div>
      <div class="direct-messages">
        <div class="direct-messages-title">
          Direct messages
        </div>
        <div class="direct-messages-content">
          Marine <br>
          Colin
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
  width: 190px;
  height: 100vh;
  color: #c9c1c6;
  font-size: 15px;
  padding: 15px;
}
.menu h1{
  color: white;
  font-weight: 900;
  font-size: 1rem;
  margin: 0px;
}
.menu .channels{
  padding-top: 18px;
}
.menu .channels-title:hover{
  color: white;
  cursor: pointer;
}
.menu .direct-messages-title:hover{
  color: white;
  cursor: pointer;
}
.menu .direct-messages{
  padding-top: 18px;
}
router-view{

}
</style>
