// More info - https://github.com/hgoebl/mobile-detect.js/
import MobileDetect from 'mobile-detect'
const md = new MobileDetect(navigator.userAgent)

export function detect () {
  if (md.os() === null) { // If it's not a mobile, return false
    return false
  } else {
    return true
  }
}

export function mobileInfo () {
  // let os
  // let version = {}
  // let userAgent
  // let others = {}

  return {
    os: md.os(),
    version: {
      webkit: md.version('Webkit'),
      gecko: md.version('Gecko')
    },
    userAgent: md.userAgent(),
    others: {
      mobile: md.mobile(),
      tablet: md.tablet() !== null,
      phone: md.phone(),
      userAgentDetail: navigator.userAgent
    }
  }
}
