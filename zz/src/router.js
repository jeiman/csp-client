import Vue from 'vue'
import Router from 'vue-router'

import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
// import { detect } from './lib/mobile'

// Import the views here
import Homepage from './views/Homepage'
import SearchResults from './views/SearchResults'

Vue.use(Router)

// const mobileDetect = detect()

// const idToken = Cookies.get('idToken')

// function loggedIn (token) {
//   return !!token
// }

// function userType () {
//   if (!idToken || idToken === 'undefined') { // Checks to see if cookie is set / user is not logged in
//     return
//   }
//   const { type } = jwtDecode(idToken)

//   if (type === 'developer') {
//     return type
//   } else if (type === 'hirer') {
//     return type
//   } else {

//   }
// }

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      component: Homepage,
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
    }
    // {
    //   name: 'login',
    //   path: '/login',
    //   component: Login,
    //   meta: {
    //     title: 'Login | Devly'
    //   },
    //   redirect: loggedIn(idToken) === true && '/'
    // },
    // {
    //   name: 'accountDeveloper',
    //   path: '/account/developer',
    //   component: Developer,
    //   meta: {
    //     title: 'Edit developer profile | Devly'
    //   },
    //   redirect: (userType() === 'hirer' && '/account') || (loggedIn(idToken) === false && '/login')
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
