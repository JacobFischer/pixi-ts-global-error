import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { Configuration } from "webpack";

module.exports = {
    entry: resolve(__dirname, 'index.ts'),
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin() ,
    ],
} as Configuration;
