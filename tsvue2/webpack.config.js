const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                esModule: true,
            },
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/],
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ]
};