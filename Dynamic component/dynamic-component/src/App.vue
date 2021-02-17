<template>
  <div>
    <div id="holdsBtns">
      <button @click="showComponent = 'HomeComponent'">Home</button>
    <button @click="showComponent = 'ProfileComponent'">Profile</button>
    </div>
    <component :is="showComponent"></component>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import ProfileComponent from './components/ProfileComponent.vue'

export default {
  components: {
    HomeComponent,
    ProfileComponent 
  },
  data(){
    return{
      showComponent: "HomeComponent"
    }
  }
}
</script>

<style>
  button{
    margin: 1em;
    padding: 1em 1.5em;
  }

  #holdsBtns{
    text-align: center;
  }
</style>
