const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://carmusan777:1234@cluster0.u1xtc.mongodb.net/almacen')
    .then(() => console.log('Connected'));

const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenadores',ordenadorSchema, 'ordenadores'); 
const buscaPrimero = ()=>{
  Ordenador.findOne()
    .then( ordenador=>{
      if (ordenador) {
        console.log('Primer ordenador encontrado',ordenador)
      } else {
        console.log('No se encontró ningún registro')
      }
    })
    .catch(err=>console.error('Error al obtener el ordenador',err));
  }

  const buscaTodos = ()=>{
  Ordenador.find()
    .then( ordenadores=>{
      if (ordenadores.length>0) {
        console.log('Ordenadores encontrados',ordenadores)
      } else {
        console.log('No se encontró ningún registro')
      }
    })
    .catch(err=>console.error('Error al obtener los ordenadores',err));
  }
  const buscaPorId = (id)=>{
  Ordenador.findById(id)
    .then( ordenador=>{
      if (ordenador) {
        console.log('Primer ordenador encontrado',ordenador)
      } else {
        console.log('No se encontró ningún registro con el id'+ id)
      }
    })
    .catch(err=>console.error('Error al obtener el ordenador',err));
  }


const buscaPrecioMayor = (precioMinimo)=>{
    Ordenador.find({precio: { $gt:precioMinimo}})
    .then( ordenadores=>{
      if (ordenadores.length>0) {
        console.log('Ordenadores encontrados con precio mayor a ' + precioMinimo,ordenadores)
      } else {
        console.log('No se encontró ningún registro')
      }
    })
    .catch(err=>console.error('Error al obtener los ordenadores',err));
  }

  const creaNuevoOrdenador = ( m , p) =>{
    const nuevoOrdenador = new Ordenador({
        marca: m,
        precio: p
      });
      nuevoOrdenador.save()
        .then(ordenador => console.log('Ordenador guardado:', ordenador))
        .catch(err => console.error('Error al guardar el ordenador:', err));

  }

  const actualizaPrecio = (idOrdenador,nuevoPrecio) => {
    Ordenador.findByIdAndUpdate(idOrdenador, { precio: nuevoPrecio }, { new: true })
    .then(ordenadorActualizado => {
      if (ordenadorActualizado) {
        console.log('Ordenador actualizado:', ordenadorActualizado);
      } else {
        console.log('No se encontró ningún ordenador con ese ID.');
      }
    })
    .catch(err => console.error('Error al actualizar el ordenador:', err));
  }

  const borraOrdenador = (idOrdenadorParaBorrar) =>{
    Ordenador.findByIdAndDelete(idOrdenadorParaBorrar)
    .then(ordenadorEliminado => {
      if (ordenadorEliminado) {
        console.log('Ordenador eliminado:', ordenadorEliminado);
      } else {
        console.log('No se encontró ningún ordenador con ese ID.');
      }
    })
    .catch(err => console.error('Error al eliminar el ordenador:', err));

}
  module.exports = { buscaPrimero,buscaTodos,buscaPorId, 
    buscaPrecioMayor, actualizaPrecio, borraOrdenador, creaNuevoOrdenador,Ordenador }