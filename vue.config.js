module.exports = {
    // 公共路径(必须有的)
    publicPath: "./",
    // 输出文件目录
    outputDir: "dist",
    // 静态资源存放的文件夹(相对于ouputDir)
    assetsDir: "static",
    lintOnSave:false,
    productionSourceMap: false, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
    //runtimeCompiler: true,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT'// 配置使用CDN
        }
    },
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        //去除eslint
        overlay: {
            warnings: false,
            errors: false
        },
       
    },
 }
 