//Crear la conexion a la BD MONGODB
const mongoose = require('mongoose');

//funcion para conectar a la BD MONGODB
const dbConnection = async() => {
    try {
        //usar mongoose para conectarnos a la BD MONGODB
        await mongoose.connect( process.env.MONGODB_CONN );
        //mensaje de conexión
        console.log('La BD esta en linea.');

    } catch (error) {
        console.log( error );
        throw new Error('Hubo un error en la conexión a la base de datos, favor de contactar a soporte.');
    }
}
//exports
module.exports = dbConnection;