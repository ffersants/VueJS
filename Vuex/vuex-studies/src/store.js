import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        netoNome: 'Fernando'
    },
    mutations: {
        ALTERA_NETO_NOME(state, nome){
            console.log(arguments)
            state.netoNome = nome;
        }
    },
    actions: {
        alteraNetoNome(context, payload){
            if(payload === "") return;
            context.commit("ALTERA_NETO_NOME", payload)
        }
    }
})