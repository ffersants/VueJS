<template>
  <div id="app">
    <h1 @click="consolar">Clique em mim para ver this.$route no console</h1>
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
  methods: {
    consolar(){
      console.log(this.$route)
    }
  }
}
</script>

<style>
  .router-link-exact-active{
    color: red;
  }
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
