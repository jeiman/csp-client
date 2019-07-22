import gravatar from 'gravatar'

function isEmpty (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) { return false }
  }
  return true
}

function getGravatarUrl (email, secure) {
  const url = gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, secure)
  return url
}

function getFirstName (name) {
  const splitString = name !== undefined ? name.split(' ') : ''
  return splitString[0]
}

function formatDate (date) {
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return day + ' ' + monthNames[monthIndex] + ' ' + year
}

export { isEmpty, getGravatarUrl, getFirstName, formatDate }
