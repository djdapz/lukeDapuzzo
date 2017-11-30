/**
 * Created by devondapuzzo on 9/19/17.
 */
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common,
    {
        output: {
            path: __dirname,
            filename: './bundle.js'
        },
        devtool: 'sourcemaps',
        devServer: {
            port: 9000,
            historyApiFallback: true,
            // hot: true,
            contentBase: './dist'
        }
    }
);