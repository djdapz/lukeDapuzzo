const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        port: 9000,
        contentBase: '../frontend-server/dist',
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.LUKE_ENV': JSON.stringify('LOCAL')
        })
    ]
});