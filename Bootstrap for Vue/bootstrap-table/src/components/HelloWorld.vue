<template>
  <div class="hello">
    <b-table :items="items">

    </b-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      items: ""
    }
  },
  beforeCreate: function(){
    fetch("http://localhost:3300/users/")
      .then(r => r.json())
      .then((r) => {
        this.items = r;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
