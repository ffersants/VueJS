<template>
    <div>
        <h1>
            Eu sou o componente PAI<br>
            O nome do meu neto é {{netoNome}}
        </h1>
        <label for="novoNome">Escolha um novo nome</label>
        <input id="novoNome" type="text">
        <button @click="alterarNome">Alterar nome</button>
    </div>
</template>

<script >
    import {mapState} from 'vuex'
    export default{
        computed: mapState(['netoNome']),   
        methods:{
            alterarNome(){
                const newName = document.getElementById("novoNome").value;
                this.$store.commit("alteraNetoNome", newName);
            }
        }   
    }
</script>

<style scoped>
    div{
        text-align: center;
    }
    label{
        font-size: 2em;
        display: block;
    }
</style>