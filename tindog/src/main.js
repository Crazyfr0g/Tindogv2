// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(buefy)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

getImgUrl(pet)
{
  return require('./assets/tindoglogov1')
}

// new Vue({
//   el: '#app',
//   router,
//   LoginPage : { Login },
//   template: '<Login>'
// })