'use strict'

module.exports = {
  dev: {
    serviceUrl: 'http://dev.csp.com:3000',
    cookies: {
      secure: false
    }
  },
  build: {
    serviceUrl: 'https://api.xane.dev',
    cookies: {
      secure: true
    }
  }
}
