// import Raven from 'raven-js'

export default function loggerWrapper (message, type = 'log') {
  if (type === 'warning') {
    console.warn(message)
    // Raven.captureException(message, {
    //   level: 'warning'
    // })
  } else if (type === 'error') {
    console.error(message)
    // Raven.captureException(message)
  } else {
    console.log(message)
  }
}
