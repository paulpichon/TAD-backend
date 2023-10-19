//Primera Version 1.0.0 - /05/10/2023
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
        // ruta señorios de tlaxcala
        this.senoriosPath = '/api/senorios';
        //ruta guerreros tlaxcalteca
        this.guerrerosPath = '/api/guerreros';
        //ruta haciendas de Tlaxcala
        this.haciendasPath = '/api/haciendas';
        //ruta carvezas tlaxcaltecas
        this.cervezasPath = '/api/cervezas';


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
        // Historia Tlaxcala
        this.app.use( this.historiasPath, require('../routes/historias') );
        // Señorios
        this.app.use( this.senoriosPath, require('../routes/senorios') );
        //Guerreros
        this.app.use( this.guerrerosPath, require('../routes/guerreros') );
        //Haciendas
        this.app.use( this.haciendasPath, require('../routes/haciendas') );
        // Cervezas
        this.app.use( this.cervezasPath, require('../routes/cervezas') );
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