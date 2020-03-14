import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { Configuration } from "webpack";

module.exports = {
    entry: resolve(__dirname, 'index.ts'),
    mode: "development",
    output: {
        path: resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin() ,
    ],
} as Configuration;
