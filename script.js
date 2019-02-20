
let posicion = ubicacion =>{
	console.log(ubicacion.coords.latitud)
	console.log(ubicacion.coords.longitude)
}
navigator.geolocation.getCurrentPosition(posicion)