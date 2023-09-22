//Guerreros Tlaxcaltecas
//Mongoose
const { Schema, model } = require('mongoose');
//modelo
const GuerrerosSchema = Schema({
    origen: {
        type: String,
        required: [true, 'El origen es obligatorio']
    },
    antecedentes_familiares: {
        type: String,
        required: [true, 'Los antecedentes son obligatorios']
    },
    participacion_conflictos: {
        type: String,
        required: [true, 'La participacion en conflictos son obligatorios']
    },
    muerte: {
        type: String,
        required: [true, 'La muerte es obligatoria']
    },
    legado: {
        type: String,
        required: [true, 'El legado es obligatorio']
    },
    imagen: {
        type: String,
        required: [true, 'La imagen es obligatoria']
    }
});
//exports
module.exports = model('Guerrero', GuerrerosSchema);