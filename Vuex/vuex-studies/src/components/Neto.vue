<template>
    <div>
        <h1>
            Eu sou o componente NETO
            meu nome é {{netoNome}}
        </h1>
    </div>
</template>

<script >
export default{
    name: "Neto",
    props:{
        netoNome: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>