const formularioRifa = document.getElementById('formularioRifa');

function gestionarRifa("submit", function (event) {
    validar(event);
    let transFormData = new FormData(formularioRifa);
    let asocObj = crearAsociado(transFormData);
    sendToStorage(asocObj);
    formularioRifa.reset();
})