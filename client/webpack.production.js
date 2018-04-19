// noinspection JSUnresolvedFunction
const merge = require('webpack-merge');
// noinspection JSUnresolvedFunction
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// noinspection JSUnresolvedFunction
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ]
});