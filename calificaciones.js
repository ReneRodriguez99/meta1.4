
const historialAsignaturas=[ 
    
    {clave: 1, nombre: "Programacion Estructurada"},
    {clave: 2, nombre: "Programacion Orientada a Objetos"},
    {clave: 3, nombre: "Desarrollo Web"},
    {clave: 4, nombre: "Circuitos Digitales"},
    {clave: 5, nombre: "Electronica Aplicada"},
    {clave: 6, nombre: "Circuitos Electricos"}

]

function generarFechaAleatoriaEnRango(fechaInicio, fechaFin) {
    // Convertir las fechas a milisegundos
    const inicioMs = fechaInicio.getTime();
    const finMs = fechaFin.getTime();
  
    // Generar un valor aleatorio entre inicioMs y finMs
    const fechaAleatoriaMs = Math.random() * (finMs - inicioMs) + inicioMs;
    // Crear un objeto Date con el valor aleatorio
    const fechaAleatoria = new Date(fechaAleatoriaMs);
  
    return fechaAleatoria;
  }
  

function generarAsignatura(){

    const asigSelect = historialAsignaturas[Math.floor(Math.random()*historialAsignaturas.length)+0]; 

    const fechaInicio = new Date('2021-01-01');
    const fechaFin = new Date('2023-06-30');
    const calif = Math.random()*100;

    const asignatura = {
        clave: asigSelect.clave,
        creditos: Math.floor(Math.random()*(8-4)+4),
        nombre: asigSelect.nombre,
        calificacion: calif.toPrecision(4),
        fecha: generarFechaAleatoriaEnRango(fechaInicio,fechaFin)
        
    }

    return asignatura;
}


function cambiarFormatoFecha(fecha){

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    let year = fecha.getFullYear();
  
    // Asegurarse de que el día y el mes tengan dos dígitos
    if (dia < 10) {
      dia = '0' + dia;
    }
    if (mes < 10) {
      mes = '0' + mes;
    }
  
    return dia + '/' + mes + '/' + year;

}


function filtrarAsignaturas(asignaturas){

    const asignaturasSinFiltrar = asignaturas.filter(asignatura => asignatura.calificacion < 60); //filtrar asignaturas con calificacion menor de 60.

    console.log("Lista de Asignaturas con calificacion menor a 60:");
    console.log(asignaturasSinFiltrar);

    const fechaActual = new Date();
    fechaActual.setMonth(fechaActual.getMonth() - 6);
    
    //filtrar aquellas asignaturas cuya fecha es mayor a la fecha que se realizo este codigo menos 6 meses.
    const asignaturasSinFiltrar2 = asignaturasSinFiltrar.filter(asignatura => asignatura.fecha.getTime()>fechaActual.getTime()); 
    
    //se obtiene las fechas en formato dd/mm/aaaa 
    const fechasStr = asignaturasSinFiltrar2.map(asignatura => asignatura.fecha = cambiarFormatoFecha(asignatura.fecha));
    
    const asignaturasFiltradas = []; //se crea un nuevo arreglo con objetos para mostrar los datos que se piden.
    
    for(i=0;i<asignaturasSinFiltrar2.length;i++){
    
        const asignaturaFinal = {
            clave: asignaturasSinFiltrar2[i].clave,
            calificacion: asignaturasSinFiltrar2[i].calificacion,
            fechaStr: fechasStr[i]
        }
    
        asignaturasFiltradas[i] = asignaturaFinal;
    }

    return asignaturasFiltradas;
}



try {

    const N = prompt("Digite la cantidad de asignaturas a manejar: ");
    const asignaturas = [];

    for(i = 0; i<N;i++){
        asignaturas[i]=generarAsignatura();
    }
    
    const asignaturasFiltradas = filtrarAsignaturas(asignaturas);
    
    if(asignaturasFiltradas.length!=0)
    
        console.log(asignaturasFiltradas);
    else
        console.log("No hubo niguna asignatura cuya fecha era mayor a la fecha actual menos 6 meses.");


} catch (error) {
    
    console.log("Se introdujo un valor erroneo");
}







