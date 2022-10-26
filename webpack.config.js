const path = require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const webpack = require('webpack')
module.exports ={
    mode:"development",
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path:path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                },
            }
        ]
    },
    devServer: {
        open:true,
        hot:true,
        port:8080,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}