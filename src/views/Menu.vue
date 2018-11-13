<template>
  <div class="menu">
    <h1>My New team</h1>
    Colin Faivre <br>
    <div class="channel">
      Channels
    </div>
    <div class="direct-messages">
      Direct messages
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'menu'
}
</script>

<style>
.menu {
  background-color: #4d394a;
  width: 200px;
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
</style>