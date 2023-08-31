const ataqueGolpe = function(){
	return "Atacando con golpe";
}
const ataqueRayo = function(){
	return "Atacando con rayo fulminante";
}


function atacar(tipoAtaque, nomPersonaje){

    return tipoAtaque() + " a " + nomPersonaje;

}

console.log(atacar(ataqueGolpe, "personaje 1"));
console.log(atacar(ataqueRayo, "personaje 2"));