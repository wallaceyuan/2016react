var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function rewriteUrl(replacePath) {
    return function (req, opt) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };
}

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devServer: {
        publicPath: "/static/",
        stats: { colors: true },
        port: 8080,
        contentBase: 'build',
        inline: true,
        proxy: [
            {
                path: /^\/api\/(.*)/,
                target: "http://localhost:8080/",
                rewrite: rewriteUrl('/$1\.json'),
                changeOrigin: true
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".css", ".json"],
    },
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // 使用这个plugin，这是最简单的一个配置，更多资料可到github查看
        new HtmlWebpackPlugin({
            title: 'zhufeng-react',
            template: path.resolve(__dirname, 'src/index.html'),
        })
    ]
};