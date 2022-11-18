const inputPokemon = document.getElementById("inputPokemon");
const botonPokemon = document.getElementById("botonPokemon");
const nombrePokemon = document.getElementById("nombrePokemon");
const imgPokemon = document.getElementById("imgPokemon");
const numeroPokemon = document.getElementById("numeroPokemon");
const tipoPokemon = document.getElementById("tipoPokemon");
const movimientoPokemon = document.getElementById("movimientoPokemon");
const medidasPokemon = document.getElementById("medidasPokemon");
const estadisticasPokemon = document.getElementById("estadisticasPokemon");

botonPokemon.addEventListener("click", (e) => {
	e.preventDefault();
	let idPokemon = inputPokemon.value;
	idPokemon = idPokemon.toLowerCase();
	traerPokemon(idPokemon);
});

function traerPokemon(pokemon) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

	fetch(url)
		.then((res) => {
			if (res.status != "200") {
				imgPokemon.src = "./assets/error.gif";
				errorPokemon();
			} else {
				return res.json();
			}
		})
		.then((data) => {
			console.log(data);

			crearPokemon(data);
		});
}

function tipos(dataTipo) {
	let tipo = "";
	for (let i = 0; i < dataTipo.types.length; i++) {
		if (i <= dataTipo.types.length) {
			tipo += `<div class="tipo${[i]}"><h3>${
				dataTipo.types[i].type.name
			}</h3></div>`;
		}
	}
	console.log(tipo);
	return tipo;
}

function movimientos(dataMovimiento) {
	let movimiento = "";

	for (let i = 0; i < (dataMovimiento.moves.length = 10); i++) {
		if (i <= dataMovimiento.moves.length) {
			movimiento += `<div class="movimiento"><h3>${dataMovimiento.moves[
				i
			].move.name.replace("-", " ")}</h3></div>`;
		}
	}
	return movimiento;
}

function estadisticas(dataEstadisticas) {
	let estadistica = "";

	for (let i = 0; i < dataEstadisticas.stats.length; i++) {
		if (i == 0) {
			estadistica += `<div class="estadistica"><label class="labelTipo" for="barra${[
				i,
			]}">HP:</label>
			<meter
				id="barra${[i]}"
				min="0"
				max="140"
				low="45"
				high="90"
				optimum="120"
				value="${dataEstadisticas.stats[i].base_stat}"></meter>
			<label class="labelNum" for="barra${[i]}">${
				dataEstadisticas.stats[i].base_stat
			}</label></div>`;
		} else if (i == 1) {
			estadistica += `<div class="estadistica"><label class="labelTipo" for="barra${[
				i,
			]}">Ataque:</label>
			<meter
				id="barra${[i]}"
				min="0"
				max="140"
				low="45"
				high="90"
				optimum="120"
				value="${dataEstadisticas.stats[i].base_stat}"></meter>
			<label class="labelNum" for="barra${[i]}">${
				dataEstadisticas.stats[i].base_stat
			}</label></div>`;
		} else if (i == 2) {
			estadistica += `<div class="estadistica"><label class="labelTipo" for="barra${[
				i,
			]}">Defensa:</label>
			<meter
				id="barra${[i]}"
				min="0"
				max="140"
				low="45"
				high="90"
				optimum="120"
				value="${dataEstadisticas.stats[i].base_stat}"></meter>
			<label class="labelNum" for="barra${[i]}">${
				dataEstadisticas.stats[i].base_stat
			}</label></div>`;
		} else if (i == 3) {
			estadistica += `<div class="estadistica"><label class="labelTipo" for="barra${[
				i,
			]}">At. esp:</label>
			<meter
				id="barra${[i]}"
				min="0"
				max="140"
				low="45"
				high="90"
				optimum="120"
				value="${dataEstadisticas.stats[i].base_stat}"></meter>
			<label class="labelNum" for="barra${[i]}">${
				dataEstadisticas.stats[i].base_stat
			}</label></div>`;
		} else if (i == 4) {
			estadistica += `<div class="estadistica"><label class="labelTipo" for="barra${[
				i,
			]}">Def. esp:</label>
			<meter
				id="barra${[i]}"
				min="0"
				max="140"
				low="45"
				high="90"
				optimum="120"
				value="${dataEstadisticas.stats[i].base_stat}"></meter>
			<label class="labelNum" for="barra${[i]}">${
				dataEstadisticas.stats[i].base_stat
			}</label></div>`;
		} else {
			estadistica += `<div class="estadistica"><label class="labelTipo" for="barra${[
				i,
			]}">Velocidad:</label>
			<meter
				id="barra${[i]}"
				min="0"
				max="140"
				low="45"
				high="90"
				optimum="120"
				value="${dataEstadisticas.stats[i].base_stat}"></meter>
			<label class="labelNum" for="barra${[i]}">${
				dataEstadisticas.stats[i].base_stat
			}</label></div>`;
		}
	}
	console.log(estadistica);
	return estadistica;
}

function crearPokemon(datosPokemon) {
	datosPokemon.name = datosPokemon.name.replace("-", " ");

	nombrePokemon.textContent = datosPokemon.name;
	imgPokemon.src = datosPokemon.sprites.front_default;
	numeroPokemon.innerHTML = `<h3>#${datosPokemon.id
		.toString()
		.padStart(3, 0)} </h3>`;
	tipoPokemon.innerHTML = `<h3>Tipo:</h3>${tipos(datosPokemon)}`;
	movimientoPokemon.innerHTML = movimientos(datosPokemon);
	medidasPokemon.innerHTML = `<div class="peso"><h3>Peso: ${
		datosPokemon.weight / 10
	} Kg</h3></div><div class="altura"><h3>Altura: ${
		datosPokemon.height / 10
	} M</h3></div>`;
	estadisticasPokemon.innerHTML = estadisticas(datosPokemon);
}

function errorPokemon() {
	nombrePokemon.textContent = "";
	numeroPokemon.innerHTML = "";
	tipoPokemon.innerHTML = "";
	movimientoPokemon.innerHTML = "";
	medidasPokemon.innerHTML = "";
	estadisticasPokemon.innerHTML = "";
}
