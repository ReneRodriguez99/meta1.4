function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function finDeTransmisionDeDatos(id) {
  console.log('Transferencia', id, 'terminada');
}
 
//Devuelve una promesa. Se utiliza el metodo then() para encadenar las operaciones de manera secuencial.
function obtenDatosDeInternet(id, duracion) { 
  console.log('Transferencia', id, 'obteniendo datos de Internet');
  return esperar(duracion)
  //Cada vez que una promesa se resuelve (después de la espera simulada), se ejecuta la función finDeTransmisionDeDatos.
    .then(() => finDeTransmisionDeDatos(id)); 
}


//La cadena de then() asegura que las operaciones ocurran en el orden correcto.
obtenDatosDeInternet(1, 1000)
  .then(() => obtenDatosDeInternet(2, 500))
  .then(() => obtenDatosDeInternet(3, 1500))
  .then(() => obtenDatosDeInternet(4, 700))
  .then(() => {
    console.log('Programa Terminado');
  });