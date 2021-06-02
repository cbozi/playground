const path = require('path')
const { optimize } = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false,
        concatenateModules: false
    }
}