module.exports = {
    entry: './src/main/js/index.js',
    cache: true,
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
    }
};
