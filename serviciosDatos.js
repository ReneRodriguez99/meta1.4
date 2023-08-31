let finDeTransmisionDeDatos = function (id){
    console.log('Transferencia',id,'terminada');
}

let obtenDatosDeInternet = function (id, duracion){
    console.log('Transferencia',id,'obteniendo datos de Internet')
    setTimeout(finDeTransmisionDeDatos,duracion,id);
}

obtenDatosDeInternet(1,1000);
obtenDatosDeInternet(2,500);
obtenDatosDeInternet(3,1500);
obtenDatosDeInternet(4,700);

console.log('Programa Terminado');