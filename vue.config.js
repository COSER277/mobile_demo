const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    //====================================公共配置==========start==/ 
    publicPath: process.env.BASE_URL,
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    //配置输出log
    devServer: {
        open: true,
        overlay: {
            warnings: false, //不输出warning 类
            errors: true
        }, 
          //跨域代理
        // proxy: {
        //     [process.env.VUE_APP_BASE_API]: {
        //         target: `http://0.0.0.0:8090`, // api地址
        //         changeOrigin: true,
        //         pathRewrite: {
        //             ['^' + process.env.VUE_APP_BASE_API]: ''
        //         }
        //     }
        // },
       
    },
  
   

    // /=====================================================end===/
    chainWebpack(config) {
        config.plugins.delete('preload') // 
        config.plugins.delete('prefetch') //
        /*配置别名 start*/
        config.resolve.alias.set('@', resolve('src'))
        config.entry('index').add('babel-polyfill').end()
        /*配置别名 end*/
        /* 配置SVG start*/
        config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
        config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/assets/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            }).end()
        /*配置SVG end*/
        // set preserveWhitespace
        config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => {
            options.compilerOptions.preserveWhitespace = true
            return options
        }).end()

        //===============================================区分环境 配置
        /*配置生产环境 */
        config.when(process.env.NODE_ENV === 'production', config => {
            // 删除console.log注释
            config.optimization.minimizer('terser').tap(args => {
                args[0].terserOptions.compress.drop_console = true
                return args
            })
        })
        /* 开发环境 */
        config
            .when(process.env.NODE_ENV === 'development', config =>
                config.devtool('cheap-source-map')
            )
    }


}