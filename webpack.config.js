const path = require("path");
const webpack = require("webpack");


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
