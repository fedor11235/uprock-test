const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // sass: {
      //   additionalData: `@import "~@/variables.sass"`
      // },
      scss: {
        additionalData: `@import "~@/styles/variables.scss";`
      },
      // less:{
      //   globalVars: {
      //     primary: '#fff'
      //   }
      // }
    }
  }
})
