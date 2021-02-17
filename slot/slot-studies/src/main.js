import Vue from 'vue'
import App from './App.vue'

import VariosSlots from './components/VariosSlots.vue'

Vue.component("VariosSlots", VariosSlots)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
