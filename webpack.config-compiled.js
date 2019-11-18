'use strict';

//to distinguish dev and prod mode

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');

var config = {
    entry: './blog-old/main.js',

    output: {
        /*path: './blog-old/public',
        publicPath: '/',*/
        filename: './js/index.js'
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream&name=[name].[ext]"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file?name=[name].[ext]"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        },
        {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            include: /node_modules/,
            loader: "file?name=[name].[ext]"
        },
        /*{
            test: /\.css$/,
            include: /node_modules/,
            loader: "style!css"
        },*/
        ]
    },
    //watch for changes with timeout
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    plugins: [new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
        LANG: JSON.stringify('ru')
    }), new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })],

    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js']
    }
};

if (NODE_ENV == 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            // dont show unreachable variables etc
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    }));
}

module.exports = config;

//optional[]=runtime - to build in ext modules, code more optimized
//stage=0 - to exclude some js alpha-beta features
//resolve.ModulesDirectories default ["web_modules", "node_modules"]
//resolveLoader.moduleTemplates default ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
//!!! resolve.alias { xyz: "/absolute/path/to/file.js }

//# sourceMappingURL=webpack.config-compiled.js.map