const path = require("path");
const { CleanWebpackPlugin } =  require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.[hash:5].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.[hash:5].html"
        })
    ]
}