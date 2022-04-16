module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "~bootstrap/scss/functions";
            @import "~bootstrap/scss/mixins";
            @import "@/assets/scss/_variables.scss";
            @import "~bootstrap/scss/utilities";
          `
      }
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  }
}
