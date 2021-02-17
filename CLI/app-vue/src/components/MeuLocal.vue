<template>
    <h1 class="local">{{message}}</h1>
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

<style>
    .local{
        color: blue;
    }
</style>
