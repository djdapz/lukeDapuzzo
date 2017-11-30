/**
 * Created by devondapuzzo on 9/19/17.
 */
const merge =  require("webpack-merge");
const common =  require("./webpack.common");

module.exports = merge(common,
    {
        output: {
            path: __dirname,
            filename: './dist/bundle.js'
        }
    }
);
