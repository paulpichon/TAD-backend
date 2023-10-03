//Aqui se enlistan algunas de las haciendas mas importantes de Tlaxcala

//Router Express
const { Router } = require('express');
const { haciendasGet, 
        haciendaGet, 
        haciendasPost, 
        haciendasPut, 
        haciendasDelete 
} = require('../controllers/haciendas');
//Asignar Router a una variable
const router = Router();

//GET
//Obtener todas las Haciendas
router.get('/', haciendasGet);
//GET
//Obtener una Hacienda por ID
router.get('/:id', haciendaGet);
//POST
router.post('/', haciendasPost);
//PUT
router.put('/:id', haciendasPut);
//DELETE
router.delete('/:id', haciendasDelete);
//exports
module.exports = router;
