'use strict'

module.exports = {
  dev: {
    serviceUrl: 'http://dev.devly.com:3000',
    cookies: {
      secure: false
    },
    github: {
      CLIENT_ID: '2aff9751424b57486448',
      CLIENT_SECRET: 'f5a8116676184c0fd8fa00ffefbd4dce671ba882'
    },
    facebook: {
      CLIENT_ID: '1983332091935123',
      CLIENT_SECRET: '876cdaddcc3ef98c79a8694931b4f8fb',
      CLIENT_TOKEN: '8b2b20d5cb6bb1b3a0c503de421ddf4b'
    }
  },
  staging: {
    serviceUrl: 'https://api-staging.devly.co',
    cookies: {
      secure: true
    },
    github: {
      CLIENT_ID: '2aff9751424b57486448',
      CLIENT_SECRET: 'f5a8116676184c0fd8fa00ffefbd4dce671ba882'
    },
    facebook: {
      CLIENT_ID: '1983332091935123',
      CLIENT_SECRET: '876cdaddcc3ef98c79a8694931b4f8fb',
      CLIENT_TOKEN: '8b2b20d5cb6bb1b3a0c503de421ddf4b'
    }
  },
  build: {
    serviceUrl: 'https://api.devly.co',
    cookies: {
      secure: true
    },
    github: {
      CLIENT_ID: '2aff9751424b57486448',
      CLIENT_SECRET: 'f5a8116676184c0fd8fa00ffefbd4dce671ba882'
    },
    facebook: {
      CLIENT_ID: '1983332091935123',
      CLIENT_SECRET: '876cdaddcc3ef98c79a8694931b4f8fb',
      CLIENT_TOKEN: '8b2b20d5cb6bb1b3a0c503de421ddf4b'
    }
  }
}
