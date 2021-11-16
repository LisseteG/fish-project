const path = require('path');
module.exports = {
    //Modo desarrollo
    mode: 'development',
    //Archivo de entrada
    entry: './client/index.js',
    //Salida
    output:{
        //Ruta de salida
        path: path.join(__dirname, 'public'),
        //Archivo salida
        filename: 'js/bundle.js',
        //Ruta path público para fines del serv desarrollo
        publicPath: '/'
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 8085,
        host: 'localhost'
    },
    //Se especifica qué se usará en las configuraciones dentro del archivo webpack.dev.config.js,
    //seguidamente estas configuraciones se agregan al archivo de producción (webpack.config.js) pero sin devServer
    module: {
        rules: [
            {
                test: /\.js$/, //Tipos de archivo para aplicar configuraciones
                exclude: /(node_modules|bower_components)/, //Excluir archivos para no transpilar
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        'modules': false,
                                        'useBuiltIns': 'usage', //Cómo va a trabajar babel con las config
                                        'targets': {"chrome":"80"}, //Que tan compatible tiene que ser el código javascript para compilar
                                        'corejs': 3 //Librerias para generar código que no exista en versiones a transpilar e instalar core-js

                                    }
                                ]
                            ],
                            "plugins": [
                                [
                                    "module-resolver",//Alias a rutas
                                    {
                                        "root": ["./"],
                                        "alias":{
                                            "@client" : "./client",
                                        }
                                    } 
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    }
}