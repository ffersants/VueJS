<template>
    <h1>{{message}}</h1>
</template>

<script>

export default {
    name: "MeuGlobal",
    data(){
        return{
            message: "It's a GLOBAL component!"
        }
    }
}
</script>

<style>
    h1{
        color: red;
    }
</style>
