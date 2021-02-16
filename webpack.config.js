const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname + "/build"),
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
        }),
        new Dotenv({ path: ".env" }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: "file-loader",
            },
        ],
    },
};
