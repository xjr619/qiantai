// 导入和vue无关第三方包
import axios from 'axios'
import 'normalize.css'
// 导入和vue依赖的第三方包
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
// 导入自己写的
import App from './App'
import router from './router'
import api from './js/api-config.js'
// 导入全局样式
import './less/index.less'
import './css/style.css'
// 使用第三方包
Vue.use(ElementUI)
Vue.use(Vuex)
// 配置相关
axios.defaults.withCredentials=true
axios.defaults.baseURL = 'http://localhost:8899'
// Vue.config.productionTip = false
// 扩展vue原型
Vue.prototype.$api = api
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
