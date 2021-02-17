import Vue from 'vue'
import App from './App.vue'

import MeuGlobal from "./components/MeuGlobal.vue"

Vue.component("meu-global", MeuGlobal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
