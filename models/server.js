//express
const express = require('express');

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
        //archivos publicos
        this.app.use( express.static('public') );
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