const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname + "/build"),
    },
    mode: "none",
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: "file-loader",
            },
        ],
    },
};
