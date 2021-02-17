<template>
    <h1>{{message}}</h1>
</template>

<script>

export default {
    name: "MeuGlobal",
    data(){
        return{
            message: "It's a LOCAL component!"
        }
    }
}
</script>

<style scoped>
    h1{
        color: blue;
    }
</style>
