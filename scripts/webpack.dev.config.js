const path = require('path')
const getPath = p => path.resolve(__dirname, '../', p)
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: getPath('dist'),
        port: 3000,
        host: 'localhost'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: getPath('index.html')
        })
    ]
})