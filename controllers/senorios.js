//Aqui se cuentan sobre los 4 señorios de Tlaxcala
//importar el schema de senorio
const Senorio = require('../models/senorio');

//controllers
//GET Señorios
const senoriosGet = async(req, res) => {
    // Obtener todos los señorios
    const [ senorios, total] = await Promise.all([
        // Traer registros
        Senorio.find(),
        // Conteo de registros
        Senorio.countDocuments()
    ]);
    // Respuesta
    res.json({
        total,
        senorios
    });
}
//GET Señorio por ID
const senorioGet = async(req, res) => {
    // Obtener el ID del señorio
    const { id } = req.params;
    // Hacer la consulta
    const senorio = await Senorio.findById( id );
    // Respuesta
    res.json({
        senorio
    });
}
//POST
const senoriosPost = async(req, res) => {
    //body
    const senorioBody = req.body;
    //crear el señorio
    const senorio = new Senorio( senorioBody );
    //Guardar en la base de datos
    await senorio.save();
    // Respuesta
    res.json( senorio );
}
//PUT
const senoriosPut = async(req, res) => {
    //Obtener el ID del señorio
    const { id } = req.params;
    //Obtener el body
    //sacamos el _id, y las demas propiedades los ponemos en un arreglo
    const { _id, ...resto} = req.body;
    //Actualizar el registro
    const senorio = await Senorio.findByIdAndUpdate( id, resto, {
        //actualizar la respuesta
        new:true
    });
    // Respuesta
    res.json( senorio );
}
//DELETE
const senoriosDelete = async(req, res) => {
    // id
    const { id } = req.params;
    // borrar fisicamente el registro
    const senorio = await Senorio.findByIdAndDelete( id, {
        new: true
    });
    // Respuesta
    res.json({
        status: 200,
        msg: 'Señorio eliminado correctamente',
        senorio
    });
}
//exports
module.exports = {
    senoriosGet,
    senorioGet,
    senoriosPost,
    senoriosPut,
    senoriosDelete
}