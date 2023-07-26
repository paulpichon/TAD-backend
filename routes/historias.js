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
//Asignar Router a una variable
const router = Router();

//GET
router.get('/', historiasGet);
//POST
router.post('/', [
    //validar que el titulo no este vacio
    check('titulo', 'El titulo es obligatorio').trim().notEmpty(),
    //validar campos
    validarCampos
], historiasPost);
//PUT
router.put('/:id', historiasPut);
//DELETE
router.delete('/:id', historiasDelete);


//exports
module.exports = router;
