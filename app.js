const modeloOrdenador = require('./models/ordenador')


const buscaTodos =()=>{
    Ordenador.find()
    .then(ordenadores=>{
        if (ordenadores.length>0){
            console.log('ordeadores encontrados',ordenador)
        }else{
            console.log('No se encontro ningun registro')
        }
    })
    .catch(err=>console.error('error al obtener los ordenadores',err));
}

const buscaPorId =(id)=>{
    Ordenador.findById(id)
    .then(ordenador=>{
        if (ordenador){
            console.log('Primer ordeador encontrado',ordenador)
        }else{
            console.log('No se encontro ningun registro con el id'+id)
        }
    })
    .catch(err=>console.error('error al obtener el ordenador',err));
}

const idBuscado = '6798f8727d41c88759f3e66b';

const buscaPrecioMayor =()=>{
    Ordenador.find({precio:{$gt:1000}})
    .then(ordenadores=>{
        if (ordenadores.length>0){
            console.log('ordeadores encontrados con precio mayor a 1000',ordenador)
        }else{
            console.log('No se encontro ningun registro')
        }
    })
    .catch(err=>console.error('error al obtener los ordenadores',err));
}

modeloOrdenador.buscarPrimero()

