module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/style.scss";`
      }
    }
  },

  pwa: {
    name: 'CSP',
    themeColor: '#4135C9',
    msTileColor: '#4135C9',
    appleMobileWebAppCapable: 'yes'
  }
}
