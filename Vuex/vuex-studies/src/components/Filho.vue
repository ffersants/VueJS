<template>
    <div>
        <h1>Eu sou o componente FILHO</h1>
       
        <neto :netoNome="netoNome"></neto>

    </div>
</template>

<script >
import Neto from './Neto.vue'

export default{
    components:{
        Neto
    },
    data(){
        return{
            netoNome: "Fernando"
        }
    }
}
</script>

<style scoped>

</style>