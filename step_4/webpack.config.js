const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'app.js'
    },
    module: {
        rules:[
            {
                //que tipo de archivo quiero reconocer
                test:/\.css$/,
                // que loader voy a usar
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]

            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'style.css'
        }),

    ]

};