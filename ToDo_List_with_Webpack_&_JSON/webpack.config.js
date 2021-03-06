var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');


module.exports = {
    entry:'./src/App.JS',
    output:{
        
        filename:'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {test:/\.CSS$/, 
                //fallbackLoader: 'style-loader',
                    use: ['style-loader','css-loader'],
                  //  publicPath: '/dist'
            
        },
        /*{
            test: /\.css$/,
            use: ExtractTextPlugin.extract([
                 'style-loader', // creates style nodes from JS strings
             {
                loader: "css-loader", // translates CSS into CommonJS
                options:{
                    modules:true,
                }
            }, ]),
            include: [
            path.resolve(__dirname, "/dist")
            ]

        }*/
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }    
    ]

    },//['style-loader','css-loader']
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Assignment 5',
             minify: {
                 collapseWhitespace: true
             },
            hash: true,
            template: './src/Assignment-5.HTML', // Load a custom template (ejs by default see the FAQ for details)
        })/*,
        new ExtractTextPlugin({
            filename: 'Style.CSS',
            disable: false,
            allChunks: true
        })*/
        //new ExtractTextPlugin({filename: 'style.css'})
    ]
}