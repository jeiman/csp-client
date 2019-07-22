import Cookies from 'js-cookie'
import config from '../../config'
import api from './axios'
import logger from './logger'
// import github from './github'

let envCookieSecure
if (process.env.NODE_ENV === 'development') {
  envCookieSecure = config.dev.cookies.secure
} else if (process.env.NODE_ENV === 'staging') {
  envCookieSecure = config.staging.cookies.secure
} else {
  envCookieSecure = config.build.cookies.secure
}

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  async login (creds, cb) {
    if (Cookies.get('idToken')) { // Checks to see if user is logged in
      if (cb) {
        logger('User is logged in, why log in again?')
        cb()
        this.onChange(true)
        return
      }
    }

    return api
      .post('/users/sessions/create/', {
        payload: creds
      })
      .then((res) => {
        const { idToken } = res.data
        if (res.status === 201) {
          Cookies.set('idToken', idToken, {
            expires: !creds.remember ? null : 30,
            secure: envCookieSecure
          })

          api.defaults.headers.common['Authorization'] = `Bearer ${idToken}`

          if (cb) {
            cb({
              status: true,
              message: 'Credentials verified. logging user in.'
            })
            this.user.authenticated = true
            return true // Testing
          }
        } else if (res.status === 404) {
          if (cb) {
            cb({
              status: false,
              message: 'User doesn\'t exist in our system'
            })
          }
        } else {
          if (cb) {
            cb({
              status: false,
              message: 'Invalid username and password entered!'
            })
            this.user.authenticated = false
            return false // Testing
          }
        }
      })
      .catch((error) => {
        Cookies.remove('idToken')
        localStorage.removeItem('user')

        logger(`Error logging in user ${error}`, 'error')
        if (error.response.status === 404) {
          if (cb) {
            cb({
              status: false,
              message: 'User doesn\'t exist in our system. Kindly register for an account.'
            })
            return false
          }
        } else {
          if (cb) {
            cb({
              status: false,
              message: 'Invalid username and password entered!. Kindly try again.'
            })
            return false
          }
        }
      })
  },

  async register (creds, cb) {
    return api
      .post('/users/register', {
        ...creds
      })
      .then((res) => {
        const { idToken, user } = res.data.data[0]
        if (res.status === 201) {
          Cookies.set('idToken', idToken, {
            expires: 30,
            secure: envCookieSecure
          })

          localStorage.setItem('user', user)
          api.defaults.headers.common['Authorization'] = `Bearer ${idToken}`

          if (cb) {
            cb({
              status: true,
              message: 'Your registration is successful!'
            })
            this.user.authenticated = true
            return true // Testing
          }
        } else if (res.status === 409) {
          if (cb) {
            cb({
              status: false,
              message: 'User exist in our system. Kindly login instead.'
            })
          }
        } else {
          if (cb) {
            cb({
              status: false,
              message: 'Unknown error, kindly try again.'
            })
            this.user.authenticated = false
            return false // Testing
          }
        }
      })
      .catch((error) => {
        Cookies.remove('idToken')
        localStorage.removeItem('user')
        logger(`Error registering user ${error}`, 'error')
        if (error.response.status === 409) {
          if (cb) {
            cb({
              status: false,
              message: 'User exist in our system. Kindly login instead.'
            })
            return false
          }
        } else {
          if (cb) {
            cb({
              status: false,
              message: 'Unknown error. Kindly try again.'
            })
            return false
          }
        }
      })
  },

  logout (redirectPath = '/?logout=true') {
    logger('Logging user out')
    Cookies.remove('idToken')
    localStorage.removeItem('user')

    delete api.defaults.headers.common['Authorization']
    this.user.authenticated = false
    this.onChange(false)

    // if (redirectPath === '/login') {
    window.location = redirectPath
    // } else {
    // window.location = '/?logout=true'
    // }
  },

  checkAuth () {
    const jwt = Cookies.get('idToken')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
      Cookies.remove('idToken')
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + Cookies.get('idToken')
    }
  },

  reassignCookie (token) {
    Cookies.remove('idToken')
    Cookies.set('idToken', token, {
      expires: 30,
      secure: envCookieSecure
    })
  },

  loggedIn () {
    return !!Cookies.get('idToken')
  },

  hideElements () {
    const token = Cookies.get('idToken')
    return !token
    // return Cookies.get('idToken')
  },

  onChange () {}
}
