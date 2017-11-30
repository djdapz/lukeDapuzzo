/**
 * Created by devondapuzzo on 9/19/17.
 */
const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ]
});