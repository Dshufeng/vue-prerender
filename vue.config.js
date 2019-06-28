const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    publicPath: '/', // 默认'/'，部署应用包时的基本 URL
    outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    assetsDir: 'assets',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: true,  // 生产环境的 source map
    parallel: require('os').cpus().length > 1,
    pwa: {},
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: ['/', '/home', '/about'],
                renderer: new Renderer({
                    inject: {
                        foo: 'bar'
                    },
                    headless: false,
                    renderAfterDocumentEvent: 'render-event',
                    //renderAfterTime: 5000,
                    //renderAfterElementExists: 'my-app-element'
                }),
            })
        ]
    }
};
