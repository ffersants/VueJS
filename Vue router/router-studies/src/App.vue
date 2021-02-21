<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/feed">Feed</router-link>
      <router-link to="/notifications">Notifications</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #app{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: black;
    color: yellow;
  }

  nav * {
    color: white;
    font-size: 2em;
    margin: 2em;
  }
  span{
    color: purple;
  }
</style>
