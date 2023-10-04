//Modelo de Haciendas
//model, schema
const { Schema, model } = require('mongoose');

//Modelo de Haciendas
const HaciendaSchema = Schema({
    nombre_hacienda: {
        type: String,
        required: [true, 'El nombre de la hacienda es obligatoria']
    },
    historia: {
        type: String,
        required: [true, 'La historia es obligatoria']
    },
    ubicacion: {
        type: String,
        required: [true, 'La ubicacion es obligatoria']
    },
    atractivos: {
        type: String,
        required: [true, 'Los atractivos son obligatorios']
    },
    img: {
        type: String,
        required: [true, 'Imagenes son obligatorias']
    },
    //true / false
    alojamiento: {
        type: Boolean,
        required: [true, 'Alojamiento es obligatorio']
    },
    //true / false
    eventos: {
        type: Boolean,
        required: [true, 'Eventos son obligatorios']
    },
    //true / false
    restaurante: {
        type: Boolean,
        required: [true, 'Restaurante es obligatorioa']
    }
});
//exports
module.exports = model('Hacienda', HaciendaSchema);