module.exports = {
    entry: './src/index.js',
    cache: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']

                }
            },
            {
                test: /\.sass/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass']
    }
};
