module.exports = {
    //1. Especificar el archivo de entrada
    entry: './client/index.js',
    //2. Especificar el archivo de salida
    output: {
        path: '/public', //3. Ruta de salida
        filename: 'bundle.js', //4. Archivo de salida
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Tipos de archivo para aplicar configuraciones
                exclude:/(node_modules|bower_components)/, //Excluir archivos para no transpilar
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
                                        'targets': ">0.25%, not dead", //Que tan compatible tiene que ser el código javascript para compilar {"chrome":"80"}
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