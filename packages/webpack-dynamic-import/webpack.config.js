const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { optimize } = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "https://yfd.fbcontent.cn/"
    },
    module: {
        rules: [
            {
                test: /\.(svg)$/i,
                use: 'file-loader'
            }
        ]
    },
    optimization: {
        minimize: false,
        concatenateModules: false
    },
    plugins: [new HtmlWebpackPlugin()]
}