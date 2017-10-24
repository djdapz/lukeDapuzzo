/**
 * Created by devondapuzzo on 9/19/17.
 */
const merge =  require("webpack-merge");
const common =  require("./webpack.common");

module.exports = merge(common,
    {
        output: {
            path: __dirname,
            filename: './src/main/resources/public/bundle.js'
        }
    }
);
