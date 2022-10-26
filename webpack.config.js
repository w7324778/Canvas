const path = require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
            },
            {
                test: /\.css$/,
                use:[
                    (process.env.NODE === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader),
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders: 1
                        }
                    },
                    // {
                    //     loader:'post-loader',
                    //     options: {
                    //         postcssOptions: {
                    //           // 添加 autoprefixer 插件
                    //             plugins: [require("autoprefixer")],
                    //         },
                    //     },
                    // },
                    // 'sass-loader'
                ]
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
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}