const path = require('path');

module.exports =  {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devServer: {
        port: 1234,
        static: true,
        historyApiFallback:true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test:/\.css$/,
                exclude: /node_modules/, 
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test:/\.scss$/,
                exclude: /node_modules/, 
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
};