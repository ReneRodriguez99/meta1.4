let finDeTransmisionDeDatos = function (id, callback){
    console.log('Transferencia',id,'terminada');
    callback(); 
}

//Se llama la funcion callback para que las funciones se ejecuten
//una vez que una funcion se termine de ejecutar.
let obtenDatosDeInternet = function (id, duracion,callback){
    console.log('Transferencia',id,'obteniendo datos de Internet')
    setTimeout(finDeTransmisionDeDatos,duracion,id,callback);
}

obtenDatosDeInternet(1,1000, function(){
    obtenDatosDeInternet(2,500,function(){
        obtenDatosDeInternet(3,1500,function(){
            obtenDatosDeInternet(4,700,function(){

                console.log('Programa Terminado');

            });
            Realiza un programa javascript en JDoodle que dado un entero N por la línea de comando, genere un arreglo de tamaño N con objetos que simulen registros de un historial de asignaturas de la carrera, con la siguiente estructura:
            { 
                clave: <entero>,
                creditos: <entero>
                nombre: <string>, 
                calificación: <flotante> 
                fecha: <una fecha tipo Date()>
            }
            
            Los valores de cada atributo de cada objeto se inicializarán de manera aleatoria a partir de una lista que contenga objetos con la clave y el nombre. Los atributos calificación, fecha y créditos se inicializarán aleatoriamente a partir de rangos predefinidos: calificación entre 0 y 100, fecha cualquier día entre 01-01-2021 y 30-06-2023, créditos de 4 a 8.
            Posteriormente utilice las funciones filter() y map() para regresar solo las cuentas que cumplan con cierto criterio que combine fecha y calificación (por ejemplo: todas las calificaciones que sean menores a 60 y cuya fecha de mayor a la fecha actual menos 6 meses, además que el arreglo de objetos que regrese tenga la estructura similar a la original, pero el campo fecha cambie por fechaStr cuyo contenido sea una cadena de fecha con el formato dd/mm/aaaa en lugar del tipo Date() original que está en milisegundos.
            
            Ejemplo de salida en consola:
            Resultados de la búsqueda con calificacion < 60 y fecha > 2023-01-01:
            [
              { clave: 12110, calificacion: 57.5, fechaStr: '06/05/2023' },
              { clave: 36793, calificacion: 0, fechaStr: '15/06/2023' }
            ]
            
            Implemente el manejo de errores try-catch para que cuando el valor N no está presente en la línea de comando o cuando su valor sea menor o igual a cero, arroje un error.
            
            Realiza un programa javascript en JDoodle que simule diferentes tipos de ataques de personajes en videojuegos, simularlos con cadenas de mensajes, por ejemplo:
            const ataqueGolpe = function(){
                return "Atacando con golpe";
            }
            const ataqueRayo = function(){
                return "Atacando con rayo fulminante";
            }
            
            Crear una función de orden superior llamada atacar() que permita usar varios ataques para varios personajes, por ejemplo, el siguiente código:
            console.log(atacar(ataqueGolpe)(“Personaje 1”));
            console.log(atacar(ataqueRayo)(“Personaje 2”));
            
            deberá desplegar lo siguiente:
            Atacando con golpe a Personaje 1
            Atacando con rayo fulminante a Personaje 2
            
            Entregar los enlaces a JDoodle y un documento de reporte con capturas de pantalla.
            
            Instalar en su computadora  la versión 18 de node.js:
            https://nodejs.org/en/download
            

        });


    });

});
