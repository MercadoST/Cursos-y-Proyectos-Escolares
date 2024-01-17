var numerosElegidos = [];
const fs = require('fs');


function RegistrarRifa() {

    var nombrePersona = document.getElementById("nombrePersona").value;
    var numeroRifa = document.getElementById("numeroRifa").value;
    var fechaHoraActual = new Date();

    if (NumeroValido(numeroRifa)) {
        if (NumeroDisponible(numeroRifa)) {
            var nuevaRifa = [numeroRifa = numeroRifa,
            fechaHoraCompra = fechaHoraActual.toLocaleString(),
            persona = nombrePersona];
            numerosElegidos.push(nuevaRifa);
            alert("El numero " + numeroRifa + " ha sido asignado a " + nombrePersona);
            AlmacenarRifa(nuevaRifa);

        }
        else {
            alert("El numero elegido no se encuentra disponible, ingrese un nuevo numero.");
        }
    }
    else {
        alert("El numero elegido no es valido, ingrese un nuevo numero.")
    }

}



function NumeroDisponible(numeroRifa) {
    var disponible = true;
    for (var i = 0; i < numerosElegidos.length; i++) {
        if (numeroRifa == numerosElegidos[i]) {
            disponible = false;
        }
        else {
            disponible = true;
        }

    }
    return disponible;
}

function NumeroValido(numeroRifa) {
    var valido = false;

    if (numeroRifa > 0) {
        valido = true;
    }
    return valido;

}

function AlmacenarRifa() {
    let jsonRifa = JSON.stringify(numerosElegidos);
    console.log(jsonRifa);
    console.log(typeof (jsonRifa));
    fs.writeFile('.rifas.json', jsonRifa)
}
