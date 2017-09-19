var path = require('path');

module.exports = {
    entry: './src/main/js/index.js',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './target/classes/public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.sass/,
                loader: "style-loader!css-loader!sass-loader"
            },

        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.sass']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
