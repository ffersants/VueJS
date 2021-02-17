<template>
  <div>
    <um-slot>
      <p>Esse é o slot</p>
      <h2>Que aceita elementos</h2>
    </um-slot>

    <varios-slots>
      <template v-slot:firstSlot>
        <p>Primeiro slot</p>
      </template>

       <template v-slot:lastSlot>
        <p>Primeiro slot</p>
      </template>
    </varios-slots>
  </div>
</template>

<script>
  import UmSlot from './components/UmSlot.vue'
    export default{
      components: { 
        UmSlot 
      },
    }
</script>

<style>

</style>
