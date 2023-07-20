//importamos la clase Server
const Server = require('./models/server');

//dotenv
require('dotenv').config();
//crear una instancia de la clase Server
const server = new Server();
//llamamos el metodo listen
server.listen();