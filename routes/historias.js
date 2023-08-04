//Aqui se cuenta la historia de Tlaxcala, se contara de 2 formas
//1.- Version extendida
//2.- Version resumen

//Router Express
const { Router } = require('express');
// express validator
const { check } = require('express-validator');
//validar campos 
const { validarCampos } = require('../middlewares/db-validators');
//Importacion de controladores
const { historiasGet, 
        historiasPost, 
        historiasPut, 
        historiasDelete 
    } = require('../controllers/historias');
//Importar funciones desde helpers/db-validators.js
const { validarIdHistoria } = require('../helpers/db-validators');
//Asignar Router a una variable
const router = Router();

//GET
router.get('/', historiasGet);
//POST
router.post('/', [
    //validar que el titulo no este vacio
    check('titulo', 'El titulo es obligatorio').trim().notEmpty(),
    //Validar que el texto de l ahistoria no este vacio
    check('texto', 'El texto no puede estar vacio').trim().notEmpty(),
    //validar el tipo de Historia: RESUMEN ó EXTENDIDA
    check('tipo_historia', 'El tipo de Historia debe ser: RESUMEN Ó EXTENDIDA').isIn(['RESUMEN', 'EXTENDIDA']),
    //validar campos
    validarCampos
], historiasPost);
//PUT
router.put('/:id', [
    //validar que el ID sea valido
    check('id', 'El ID no es valido').isMongoId(),
    //Validar que el ID de la Historia exista en la BD
    check('id').custom( validarIdHistoria ),
    //validar que el titulo no este vacio
    check('titulo', 'El titulo es obligatorio').optional().trim().notEmpty(),
    //Validar que el texto de l ahistoria no este vacio
    check('texto', 'El texto no puede estar vacio').optional().trim().notEmpty(),
    //validar el tipo de Historia: RESUMEN ó EXTENDIDA
    check('tipo_historia', 'El tipo de Historia debe ser: RESUMEN Ó EXTENDIDA').optional().isIn(['RESUMEN', 'EXTENDIDA']),
    //validar los campos
    validarCampos
], historiasPut);
//DELETE
router.delete('/:id', [
    //validar que el ID sea valido
    check('id', 'El ID no es valido').isMongoId(),
    //Validar que el ID de la Historia exista en la BD
    check('id').custom( validarIdHistoria ),
    //validar los campos
    validarCampos
], historiasDelete);


//exports
module.exports = router;
