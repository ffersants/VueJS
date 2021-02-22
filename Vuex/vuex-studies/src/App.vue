<template>
  <div id="app">
    
    <pai></pai>
    <filho></filho>

  </div>
</template>

<script>
import Pai from './components/Pai.vue'
import Filho from './components/Filho.vue'

export default {
  name: 'App',
  components: {
    Pai,
    Filho
  }
}
</script>

<style>
h1, p {
  margin-top: 6em;
  margin-bottom: 6em;
  text-align: center;
}
</style>
