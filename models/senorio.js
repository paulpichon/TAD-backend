// Schema, model
const { Schema, model } = require('mongoose');
// Schema
const SenorioSchema = Schema({
    // nombre de los señorios
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    // imagen de los señorios
    imagen: {
        type: String,
        required: [true, 'imágen es obligatorio']
    },
    // ubicacion del señorio
    ubicacion: {
        type: String,
        required: [true, 'ubicación es obligatoria']
    },
    // historia del señorio
    historia_antigua: {
        type: String,
        required: [true, 'historia_antigua es obligatoria']
    },
    // economia y comercio de cada uno de los señorios
    economia_comercio: {
        type: String,
        required: [true, 'economia_comercio es obligatoria']
    },
    // participacion y conflictos de los señorios
    participacion_conflictos: {
        type: String,
        required: [true, 'participacion_conflictos es obligatorio ']
    },
    // alianza con los españoles
    alianza_españoles: {
        type: String,
        required: [true, 'alianza_españoles es obligatorio']
    },
    // epoca colonial despues de la conquista 
    epoca_colonial: {
        type: String,
        required: [true, 'epoca_colonial es obligatorio']
    }
});
//quitar visualmente __v en la respuesta/response
SenorioSchema.methods.toJSON = function() {
    //desestructurar las propieades a quitar
    const { __v, ...senorio} = this.toObject();
    //devolvemos el señorio
    return senorio;
}
// exports
module.exports = model('Señorio', SenorioSchema);