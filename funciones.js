//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;//-500
    if (disponible < 0) {// -500<0 true
        disponible = 0;//0
    }
    return disponible; //500
}

function mostrarEnSpan(idSpan, valor) {
    let componente = document.getElementById(idSpan);
    componente.textContent = valor;
}

function mostrarEnTxt(idTxt) {
    let componente = document.getElementById(idTxt);
    return componente.value;
}

function calcularCapacidadPago(montoDisponible) {
    let capacidadPago = montoDisponible / 2;
    return capacidadPago;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = monto * (tasa / 100) * plazoAnios;
    return interes;
}

function calcularTotalPagar(monto, interes) {
    const SOLCA = 100;
    let totalPagar = parseFloat(monto) + parseFloat(interes) + SOLCA;
    return totalPagar;
}

function calcularCuotaMensual(total, plazoMensual) {
    let plazoMeses = plazoMensual * 12;
    let cuotaMensual = total / plazoMeses;
    return cuotaMensual;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago >= cuotaMensual) {
        return "CREDITO APROBADO";
    } else {
        return "CREDITO RECHAZADO";
    }
}

