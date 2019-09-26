import Vue from 'vue'
import Router from 'vue-router'

// Import the views here
import Root from './views/Root'
import Comparison from './views/Comparison'
import Onboarding from './views/Onboarding'
import SearchResults from './views/SearchResults'
import ServiceDetail from './views/ServiceDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      component: Root,
      meta: {
        title: 'CSP'
      }
    },
    {
      name: 'results',
      path: '/results',
      component: SearchResults,
      meta: {
        title: 'Search Results'
      }
    },
    {
      name: 'onboarding',
      path: '/onboarding',
      component: Onboarding,
      meta: {
        title: 'Onboarding'
      }
    },
    {
      name: 'comparison',
      path: '/comparison',
      component: Comparison,
      meta: {
        title: 'Cloud Service Comparison'
      }
    },
    {
      name: 'serviceDetail',
      path: '/service/:id',
      component: ServiceDetail,
      meta: {
        title: 'Service Detail Page'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
