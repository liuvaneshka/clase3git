
let posicion = ubicacion =>{
	console.log(ubicacion.coords.latitude)
	console.log(ubicacion.coords.longitude)
	let p = document.createElement("p")
	p.innerText = `Mi ubicacion es ${lat} y ${lon} `
	document.body.appendChild(p)
}
navigator.geolocation.getCurrentPosition(posicion)