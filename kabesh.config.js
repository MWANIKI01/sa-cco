const { defineConfig } = require('@org/kabesh')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true,
  },
})

