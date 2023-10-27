//Cervezas artesanales de Tlaxcala
//importar el schema de la cerveza
const Cerveza = require('../models/cerveza');

//controllers
//GET Señorios
const cervezasGet = async(req, res) => {
    //query params
    const { limite = 4, desde = 0 } = req.query;
    //Parametro para traer los registros
    const query = { disponible : true };
    //Mostrar todos los registros
    /*const usuarios = await Cerveza.find( query )
        //limite de resultados    
        .limit( limite )
        //desde
        .skip( desde );*/
    //total de registros
    //const total = await Cerveza.countDocuments( query );

    const [ total, usuarios ] = await Promise.all([
        Cerveza.countDocuments( query ),
        Cerveza.find( query )
            //limite de resultados    
            .limit( limite )
            //desde
            .skip( desde )
    ]);

    //respuesta
    res.json({
        total,
        usuarios
    });
}
//GET Señorio por ID
const cervezaGet = async(req, res) => {
    //respuesta
    res.json({
        msg: 'GET API'
    });
}
//POST
const cervezasPost = async (req, res) => {
    //body
    const body = req.body;
    //crear la cerveza
    const cerveza = new Cerveza( body );
    //guardar el registro en la BD
    await cerveza.save();
    //respuesta
    res.json( cerveza );
}
//PUT
const cervezasPut = async(req, res) => {
    //id
    const { id } = req.params;
    //body
    const body = req.body;
    //actualizar el registro
    const cerveza = await Cerveza.findByIdAndUpdate( id, body, {
        //actualizar respuesta
        new: true
    });
    //respuesta
    res.json( cerveza );
}
//DELETE
const cervezasDelete = async (req, res) => {
    //id
    const { id } = req.params;
    //En lugar de borrar fisicamente el registro, se actualiza la disponibilidad a false
    const cerveza = await Cerveza.findByIdAndUpdate( id, { disponible: false }, {
        //respuesta actualizada
        new: true
    });
    //respuesta
    res.json({
        cerveza
    });
}
//exports
module.exports = {
    cervezasGet,
    cervezaGet,
    cervezasPost,
    cervezasPut,
    cervezasDelete
}