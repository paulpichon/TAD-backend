//Modelo de cerveza
const { Schema, model } = require('mongoose');

//Modelo Cerveza
const CervezaSchema = Schema({
    marca_cerveza: {
        type: String,
        required: [true, 'La marca de cerveza es obligatoria']
    },
    procedencia: {
        type: Object,
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
    logo: {
        type: String,
        default: 'No imagen'
    },
    img_cerveza: {
        type: String,
        default: 'No imagen'
    }
});
//no mostrar __v
CervezaSchema.methods.toJSON = function() {
    //desestructurar la propiedad que no queremos mostrar
    const { __v, ...cerveza } = this.toObject();
    //retornar cerveza
    return cerveza;
}
//exports
module.exports = model('Cerveza', CervezaSchema);