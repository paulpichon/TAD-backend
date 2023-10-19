//Aqui se enlistan las cervezas artesanales de Tlaxcala
//Router Express
const { Router } = require('express');
//Importación de controladores
const { cervezasGet, 
        cervezaGet, 
        cervezasPost, 
        cervezasPut, 
        cervezasDelete } = require('../controllers/cervezas');
//Asignar Router a una variable
const router = Router();

//GET ALL
router.get('/', cervezasGet);
//GET 
router.get('/:id', cervezaGet);
//POST
router.post('/', cervezasPost);
//PUT
router.put('/:id', cervezasPut);
//DELETE
router.delete('/:id', cervezasDelete);
//exports
module.exports = router;
