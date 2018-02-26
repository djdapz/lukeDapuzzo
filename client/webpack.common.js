module.exports = {
    entry: './src/index.js',
    cache: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // plugins: ["babel-plugin-transform-decorators"],
                query: {
                    presets: ['env', 'react', 'stage-0'],
                    plugins: ["transform-decorators-legacy"]

                }
            },
            {
                test: /\.sass/,
                loader: "style-loader!css-loader!sass-loader"
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass']
    }
};
