//Aqui se enlistan algunas de las haciendas mas importantes de Tlaxcala

//Router Express
const { Router } = require('express');
const { haciendasGet, 
        haciendaGet, 
        haciendasPost, 
        haciendasPut, 
        haciendasDelete 
} = require('../controllers/haciendas');
//express validator
const { check } = require('express-validator');
//validar campos
const { validarCampos } = require('../middlewares/validar-campos');
//Validar si existe la Hacienda por el ID
const { validarIdHacienda } = require('../helpers/db-validators');
//Asignar Router a una variable
const router = Router();

//GET
//Obtener todas las Haciendas
router.get('/', haciendasGet);
//GET
//Obtener una Hacienda por ID
router.get('/:id', haciendaGet);
//POST
router.post('/', [
    //validar que nombre_hacienda no este vacio
    check('nombre_hacienda', 'nombre_hacienda es obligatorio').trim().notEmpty(),
    //validar historia
    check('historia', 'historia es obligatorio').trim().notEmpty(),
    //validar ubicacion
    check('ubicacion', 'ubicacion es obligatorio').trim().notEmpty(),
    //validar atractivos
    check('atractivos', 'atractivos es obligatorio').trim().notEmpty(),
    //validar img
    check('img', 'img es obligatorio').trim().notEmpty(),
    //validar alojamiento
    check('alojamiento', 'alojamiento es obligatorio : el tipo debe ser booleano true/false').isBoolean( {strict : true} ),
    //validar eventos
    check('eventos', 'eventos es obligatorio : el tipo debe ser booleano true/false').isBoolean( {strict : true} ),
    //validar restaurante
    check('restaurante', 'restaurante es obligatorio : el tipo debe ser booleano true/false').isBoolean( {strict : true} ),
    validarCampos
], haciendasPost);
//PUT
router.put('/:id', [
    //validar el ID
    check('id', 'El ID no es valido').isMongoId(),
    //validar que el ID exista en la base de datos
    check('id').custom( validarIdHacienda ),
     //validar que nombre_hacienda no este vacio
     check('nombre_hacienda', 'nombre_hacienda es obligatorio').optional().trim().notEmpty(),
     //validar historia
     check('historia', 'historia es obligatorio').optional().trim().notEmpty(),
     //validar ubicacion
     check('ubicacion', 'ubicacion es obligatorio').optional().trim().notEmpty(),
     //validar atractivos
     check('atractivos', 'atractivos es obligatorio').optional().trim().notEmpty(),
     //validar img
     check('img', 'img es obligatorio').optional().trim().notEmpty(),
     //validar alojamiento
     check('alojamiento', 'alojamiento es obligatorio : el tipo debe ser booleano true/false').optional().isBoolean( {strict : true} ),
     //validar eventos
     check('eventos', 'eventos es obligatorio : el tipo debe ser booleano true/false').optional().isBoolean( {strict : true} ),
     //validar restaurante
     check('restaurante', 'restaurante es obligatorio : el tipo debe ser booleano true/false').optional().isBoolean( {strict : true} ),
     validarCampos
], haciendasPut);
//DELETE
router.delete('/:id', [
    //validar el ID
    check('id', 'El ID no es valido').isMongoId(),
    //validar que el ID exista en la base de datos
    check('id').custom( validarIdHacienda ),
    //validar campos
    validarCampos
], haciendasDelete);
//exports
module.exports = router;
