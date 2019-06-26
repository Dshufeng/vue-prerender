import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
