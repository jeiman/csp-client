import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueResource from 'vue-resource'
import Notifications from 'vue-notification'
import Multiselect from 'vue-multiselect'
Vue.use(Notifications)
Vue.use(VueResource)
Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Request-Method'] = '*'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// Vue.component('navigation', require('./components/Navigation.vue'))
// Vue.component('mobile-nav', require('./components/MobileNav.vue'))
Vue.component('footers', require('./components/Footer.vue'))
// Vue.component('skills-picker', require('./components/SkillsPicker.vue'))
// Vue.component('account-nav', require('./components/AccountNav.vue'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
