/**
 * Created by devondapuzzo on 9/19/17.
 */
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common,
    {
        output: {
            path: __dirname,
            filename: './out/production/resources/public/bundle.js'
        },
        devtool: 'sourcemaps',
        devServer: {
            historyApiFallback: true,
            contentBase: './'
        }
    }
);