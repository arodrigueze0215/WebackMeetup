const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'main.js'
    },
    module: {
        rules:[
            {
                //que tipo de archivo quiero reconocer
                test:/\.css$/,
                // que loader voy a usar
                use: ['style-loader', 'css-loader']

            }
        ]
    }

};