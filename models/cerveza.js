//Modelo de cerveza
const { Schema, model } = require('mongoose');

//Modelo Cerveza
const CervezaSchema = Schema({
    marca_cerveza: {
        type: String,
        required: [true, 'La marca de cerveza es obligatoria']
    },
    procedencia: {
        type: String,
        required: [true, 'La procedencia de la cerveza es obligatoria']
    },
    estado: {
        type: String,
        default: 'Tlaxcala'
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es obligatorio']
    },
    razon_social: {
        type: String,
        required: [true, 'La razon social es obligatoria']
    },
    //disponibilidad de la cerveza
    disponible: {
        type: Boolean,
        default: true
    },
    img: {
        type: String,
        default: 'No imagen'
    }
});
//exports
module.exports = model('Cerveza', CervezaSchema);