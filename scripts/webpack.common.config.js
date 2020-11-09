const path = require('path')
const getPath = p => path.resolve(__dirname, '../', p)
const Components = require('../components.json')

const config = {
    entry: Components,
    output: {
        path: getPath('dist'),
        filename: 'lib/[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    }
}

module.exports = config