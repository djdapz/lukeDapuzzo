/**
 * Created by devondapuzzo on 9/19/17.
 */
const merge =  require("webpack-merge");
const common =  require("./webpack.common");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common,
    {
        output: {
            path: __dirname,
            filename: './dist/bundle.js'
        },
        plugins: [
            new UglifyJSPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    }
);
