function crearElemento (texto) {
	var div = document.createElement("div");
	var titulo1 = document.createElement("h1");
	var parrafo = document.createElement("p");

	var contenido1 = document.createTextNode(titulo);
	var contenido2 = document.createTextNode(texto);

	div.appendChild(titulo1);
	div.appendChild(parrafo);
	titulo1.appendChild(contenido1);
	parrafo.appendChild(contenido2);

	var div2 = document.getElementById("primer_div");
	div2.appendChild(div);
}

crearElemento("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");