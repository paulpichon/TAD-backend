//Aqui se cuentan sobre los 4 señorios de Tlaxcala

//Router Express
const { Router } = require('express');
// Importar controladores
const { senoriosGet, 
        senorioGet,
        senoriosPost, 
        senoriosPut, 
        senoriosDelete, 
    } = require('../controllers/senorios');
//Asignar Router a una variable
const router = Router();

//GET ALL
router.get('/', senoriosGet);
//GET 
router.get('/:id', senorioGet);
//POST
router.post('/', senoriosPost);
//PUT
router.put('/:id', senoriosPut);
//DELETE
router.delete('/:id', senoriosDelete);
//exports
module.exports = router;
