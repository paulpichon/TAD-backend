//Aqui se enlistan algunos de lso guerreros mas importantes de Tlaxcala

//Router Express
const { Router } = require('express');
//express validator
const { check } = require('express-validator');
//Controladores
const { guerrerosGet, 
        guerreroGet, 
        guerrerosPost, 
        guerrerosPut, 
        guerrerosDelete 
} = require('../controllers/guerreros');
//validar los campos
const { validarCampos } = require('../middlewares/validar-campos');
//validar ID del guerrero desde db-validators
const { validarIdGuerrero } = require('../helpers/db-validators');
//Asignar Router a una variable
const router = Router();

//GET
//Obtener todos los guerreros
router.get('/', guerrerosGet);
//GET
//Obtener un guerrero por ID
router.get('/:id', guerreroGet);
//POST
router.post('/', [
    //validar que no este vacio el campo
    check('origen', 'El origen es obligatorio').trim().notEmpty(),
    //validar que no este vacio el campo
    check('antecedentes_familiares', 'Los antecedentes_familiares son obligatorios').trim().notEmpty(),
    //validar que no este vacio el campo
    check('participacion_conflictos', 'La participacion_conflictos es obligatorio').trim().notEmpty(),
    //validar que no este vacio el campo
    check('muerte', 'La muerte es obligatoria').trim().notEmpty(),
    //validar que no este vacio el campo
    check('legado', 'El legado es obligatorio').trim().notEmpty(),
    //validar que no este vacio el campo
    check('imagen', 'La imagen es obligatorio').trim().notEmpty(),
    //validar los campos
    validarCampos
], guerrerosPost);
//PUT
router.put('/:id', [
    //validar el ID
    check('id', 'El ID no es valido').isMongoId(),
    //verificar que el ID existe en la BD
    check('id').custom( validarIdGuerrero ),
    //validar que no este vacio el campo
    check('origen', 'El origen es obligatorio').optional().trim().notEmpty(),
    //validar que no este vacio el campo
    check('antecedentes_familiares', 'Los antecedentes_familiares son obligatorios').optional().trim().notEmpty(),
    //validar que no este vacio el campo
    check('participacion_conflictos', 'La participacion_conflictos es obligatorio').optional().trim().notEmpty(),
    //validar que no este vacio el campo
    check('muerte', 'La muerte es obligatoria').optional().trim().notEmpty(),
    //validar que no este vacio el campo
    check('legado', 'El legado es obligatorio').optional().trim().notEmpty(),
    //validar que no este vacio el campo
    check('imagen', 'La imagen es obligatorio').optional().trim().notEmpty(),
    //validar los campos
    validarCampos
], guerrerosPut);
//DELETE
router.delete('/:id', guerrerosDelete);
//exports
module.exports = router;
