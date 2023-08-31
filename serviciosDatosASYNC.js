
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //devuelve una promesa que se resuelve después de un tiempo determinado
  }
  
  async function finDeTransmisionDeDatos(id) {
    console.log('Transferencia', id, 'terminada');
  }
  
  async function obtenDatosDeInternet(id, duracion) {
    console.log('Transferencia', id, 'obteniendo datos de Internet');
    await esperar(duracion); //se utiliza await esperar(duracion) para pausar la ejecución durante la duración especificada antes de continuar.
    await finDeTransmisionDeDatos(id);  
    //Se utiliza await finDeTransmisionDeDatos(id) para esperar hasta que la función finDeTransmisionDeDatos se complete antes de continuar con la siguiente operación.
  }
  
  async function iniciarSimulacion() {
    await obtenDatosDeInternet(1, 1000); //las operaciones se ejecutan en secuencia utilizando await.
    await obtenDatosDeInternet(2, 500);
    await obtenDatosDeInternet(3, 1500);
    await obtenDatosDeInternet(4, 700);
  
    console.log('Programa Terminado');
  }
  
  iniciarSimulacion();
  