const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://carmusan777:1234@cluster0.u1xtc.mongodb.net/almacen')
    .then(() => console.log('Connected'));

const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenadores',ordenadorSchema,"ordenadores");

const buscaPrimero =()=>{
    Ordenador.findOne()
    .then(ordenador=>{
        if (ordenador){
            console.log('Primer ordeador encontrado',ordenador)
        }else{
            console.log('No se encontro ningun registro')
        }
    })
    .catch(err=>console.error('error al obtener el ordenador',err));
}

module.exports = {buscaPrimero, Ordenador};