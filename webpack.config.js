{
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
    }
}