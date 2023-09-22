//Aqui se enlistan algunos de lso guerreros mas importantes de Tlaxcala

//Router Express
const { Router } = require('express');
//Controladores
const { guerrerosGet, 
        guerreroGet, 
        guerrerosPost, 
        guerrerosPut, 
        guerrerosDelete 
} = require('../controllers/guerreros');
//Asignar Router a una variable
const router = Router();

//GET
//Obtener todos los guerreros
router.get('/', guerrerosGet);
//GET
//Obtener un guerrero por ID
router.get('/:id', guerreroGet);
//POST
router.post('/', guerrerosPost);
//PUT
router.put('/:id', guerrerosPut);
//DELETE
router.delete('/:id', guerrerosDelete);
//exports
module.exports = router;
