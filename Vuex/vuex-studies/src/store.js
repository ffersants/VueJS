import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        netoNome: 'Fernando'
    },
    mutations: {
        alteraNetoNome(state, nome){
            console.log(arguments)
            state.netoNome = nome;
        }
    }
})