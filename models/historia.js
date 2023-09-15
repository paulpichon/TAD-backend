//schema 
const { Schema, model } = require('mongoose');

//modelo
const historiaSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    img: {
        type: String,
        required: [true, 'La imagen es obligatoria']
    },
    texto: {
        type: String,
        required: [true, 'El texto es obligatorio']
    },
    tipo_historia: {
        type: String,
        required: [true, 'El tipo de historia es obligatorio'],
        enum: ['RESUMEN', 'EXTENDIDA']
    },
    estado_visible: {
        type: Boolean,
        default: true
    },
    
});
//
historiaSchema.methods.toJSON = function() {
    //desestructurar
    //ocultar la  version
    const { __v, ...historia } = this.toObject();
    //retornar la historia
    return historia;
}
//exports
module.exports = model('Historia', historiaSchema);