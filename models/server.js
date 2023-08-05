//express
const express = require('express');
//cors
const cors = require('cors');
//importar funcion para conectar a la BD
const dbConnection = require('../database/config');
//Clase Server
class Server {
    //constructor
    constructor() {
        //app express
        this.app = express();
        //puerto
        this.port = process.env.PORT || 3000;
        //ruta historias tlaxcala
        this.historiasPath = '/api/historia-tlaxcala';


        //metodo para conectar a la BD
        this.conectarDB();
        //middlewares
        this.middlewares();
        //Llamar metodo routes
        this.routes();
    }
    //metodo conexion a base de datos
    async conectarDB() {
        //funcion importada para conectar a la BD
        await dbConnection();
    }
    //middlewares
    middlewares() {
        //cors 
        this.app.use(cors());
        //archivos publicos / directorio publico
        this.app.use( express.static('public') );
        //lectura y parsear del body
        this.app.use( express.json() );
    }
    //Metodo para las rutas de la API
    routes() {
        /***Rutas***/
        this.app.use( this.historiasPath, require('../routes/historias') );
    }
    //Listener del puerto
    listen() {
        //Puerto
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${ this.port }`);
        });
    }
}
//exports
module.exports = Server;