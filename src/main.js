import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
// 导入mock
import './mock/'
// 导入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App)
}).$mount('#app')
