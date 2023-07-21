//express
const express = require('express');
//cors
const cors = require('cors')

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


        //middlewares
        this.middlewares();
        //Llamar metodo routes
        this.routes();
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