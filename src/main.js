import Vue from 'vue'
import App from './App.vue'
import Bus from 'vue-bus'

Vue.config.productionTip = false

Vue.use(Bus)
// Vue.prototype.$buss = new Vue()

// console.log(Vue.$buss)

new Vue({
  render: h => h(App),
}).$mount('#app')
