//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let disponible = calcularDisponible(ingresos, egresos);
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));//500.00
    let capacidadPagoMensual = calcularCapacidadPago(disponible);
    mostrarEnSpan("spnCapacidadPago", capacidadPagoMensual.toFixed(2));
    let monto = mostrarEnTxt("txtMonto");
    let plazo = document.getElementById("txtPlazo").value;
    let tasa = document.getElementById("txtTasaInteres").value;
    let interes = calcularInteresSimple(monto, tasa, plazo);
    mostrarEnSpan("spnInteresPagar", interes.toFixed(2));
    let totalPagar = calcularTotalPagar(monto, interes);
    mostrarEnSpan("spnTotalPrestamo", totalPagar.toFixed(2));
    let cuotaMensual = calcularCuotaMensual(totalPagar, plazo);
    mostrarEnSpan("spnCuotaMensual", cuotaMensual.toFixed(2));
    let estadoCredito = aprobarCredito(capacidadPagoMensual, cuotaMensual);
    mostrarEnSpan("spnEstadoCredito", estadoCredito);
}



