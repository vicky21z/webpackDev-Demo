const path = require("path");
const { CleanWebpackPlugin } =  require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry : path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "js/bundle.[hash:5].js"
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.[hash:5].html"
        }),
        new MiniCSSExtractPlugin({
            filename: "css/index.[hash:5].css",
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: [{
                loader: MiniCSSExtractPlugin.loader,
                options: {
                    publicPath: "../"
                }
            }, 
            "css-loader"]},
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            {test: /\.(png|jpg|bmp|gif)$/, use:"url-loader?limit=10000&name=images/[name].[hash]-[name].[ext]"},

        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                lib: {
                    name: "jquery",
                    test: /[\\]node_modules[\\]/,
                    priority: 10,
                    chunks: "initial"
                }
            }
        }
    }
}