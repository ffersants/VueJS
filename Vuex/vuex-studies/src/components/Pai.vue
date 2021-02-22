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

<script>
    import {mapState, mapActions} from 'vuex'
    export default{
        computed: mapState(['netoNome']),   
        methods:{
            ...mapActions(['alteraNetoNome']),
            alterarNome(){
                const newName = document.getElementById("novoNome").value;
                this.alteraNetoNome(newName);
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