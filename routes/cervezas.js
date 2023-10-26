//Aqui se enlistan las cervezas artesanales de Tlaxcala
//Router Express
const { Router } = require('express');
//Importación de controladores
const { cervezasGet, 
        cervezaGet, 
        cervezasPost, 
        cervezasPut, 
        cervezasDelete } = require('../controllers/cervezas');
//Validar campos
const { validarCampos } = require('../middlewares/validar-campos');
//express validator
const { check } = require('express-validator');
const { validarIdCerveza } = require('../helpers/db-validators');
//Asignar Router a una variable
const router = Router();

//GET ALL
router.get('/', cervezasGet);
//GET 
router.get('/:id', cervezaGet);
//POST
router.post('/', [
    //validar marca
    check('marca_cerveza').trim().notEmpty(),
    //validar procedencia
    //validar un array
    check('procedencia', 'La procedencia es obligatoria, debe tener minimo 1').trim().isArray({ min:1 }).notEmpty(),
    //validar Correo
    check('correo', 'El correo es obligatorio').isEmail(),
    //telefono
    check('telefono', 'El telefono es obligatorio').trim().notEmpty(),
    //razon_social
    check('razon_social', 'La razon social es obligatoria').trim().notEmpty(),
    //validar campos
    validarCampos
], cervezasPost);
//PUT
router.put('/:id', [
    //validar ID
    check('id', 'El ID no es valido').isMongoId(),
    //validar existencia ID
    check('id').custom( validarIdCerveza ),
    //validar marca
    check('marca_cerveza').optional().trim().notEmpty(),
    //validar procedencia
    //validar un array
    check('procedencia', 'La procedencia es obligatoria, debe tener minimo 1').optional().trim().isArray({ min:1 }).notEmpty(),
    //validar Correo
    check('correo', 'El correo es obligatorio').optional().isEmail(),
    //telefono
    check('telefono', 'El telefono es obligatorio').optional().trim().notEmpty(),
    //razon_social
    check('razon_social', 'La razon social es obligatoria').optional().trim().notEmpty(),
    //validar campos
    validarCampos
], cervezasPut);
//DELETE
router.delete('/:id', [
    //validar ID
    check('id', 'El ID no es valido').isMongoId(),
    //validar existencia ID
    check('id').custom( validarIdCerveza ),
    //validar campos
    validarCampos
], cervezasDelete);
//exports
module.exports = router;
