//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function limpiarErrores() {
    document.getElementById("errIngresos").textContent = "";
    // document.getElementById("errEgresos").textContent = "";
    document.getElementById("errMonto").textContent = "";
    document.getElementById("errPlazo").textContent = "";
    document.getElementById("errTasaInteres").textContent = "";
}

function esNumero(valor) {
    return !isNaN(valor) && valor !== "";
}

function tieneEspacios(valor) {
    return valor !== valor.trim();
}

function esEnteroPositivo(valor) {
    return /^[0-9]+$/.test(valor);
}

function esDecimalPositivo(valor) {
    return /^\d+(\.\d+)?$/.test(valor);
}

function esNumero(valor) {
    return !isNaN(valor) && valor !== "";
}

function tieneEspacios(valor) {
    return valor !== valor.trim();
}

function esNegativo(valor) {
    return valor.toString().includes("-");
}

function calcular() {

    limpiarErrores();
    let valido = true;

    let ingresos = document.getElementById("txtIngresos").value;
    //let egresos = document.getElementById("txtEgresos").value;

    let arriendo = document.getElementById("txtArriendo").value;
    let alimentacion = document.getElementById("txtAlimentacion").value;
    let varios = document.getElementById("txtVarios").value;

    let monto = document.getElementById("txtMonto").value;
    let plazo = document.getElementById("txtPlazo").value;
    let tasa = document.getElementById("txtTasaInteres").value;

    // ===== VALIDACIÓN ESPACIOS (TODOS) =====
    if (tieneEspacios(ingresos)) {
        document.getElementById("errIngresos").textContent = "No se permiten espacios";
        valido = false;
    }

    if (tieneEspacios(egresos)) {
        document.getElementById("errEgresos").textContent = "No se permiten espacios";
        valido = false;
    }

    if (tieneEspacios(monto)) {
        document.getElementById("errMonto").textContent = "No se permiten espacios";
        valido = false;
    }

    if (tieneEspacios(plazo)) {
        document.getElementById("errPlazo").textContent = "No se permiten espacios";
        valido = false;
    }

    if (tieneEspacios(tasa)) {
        document.getElementById("errTasa").textContent = "No se permiten espacios";
        valido = false;
    }

    // ===== INGRESOS =====
    if (ingresos === "") {
        document.getElementById("errIngresos").textContent = "Campo obligatorio";
        valido = false;
    } else if (ingresos == 0) {
        document.getElementById("errIngresos").textContent = "Debe ingresar un valor mayor a 0";
        valido = false;
    } else if (!esNumero(ingresos)) {
        document.getElementById("errIngresos").textContent = "Solo números";
        valido = false;
    } else if (esNegativo(ingresos) || parseFloat(ingresos) < 0) {
        document.getElementById("errIngresos").textContent = "Ingrese un valor correcto";
        valido = false;
    }

    // ===== EGRESOS =====
    if (egresos === "") {
        document.getElementById("errEgresos").textContent = "Campo obligatorio";
        valido = false;
    } else if (egresos == 0) {
        document.getElementById("errEgresos").textContent = "Debe ingresar un valor mayor a 0";
        valido = false;
    } else if (!esNumero(egresos)) {
        document.getElementById("errEgresos").textContent = "Solo números";
        valido = false;
    } else if (esNegativo(egresos)) {
        document.getElementById("errEgresos").textContent = "Ingrese un valor correcto";
        valido = false;
    }

    // VALIDACIÓN CRUZADA: EGRESOS NO PUEDE SER MAYOR QUE INGRESOS
    if (
        esNumero(ingresos) &&
        esNumero(egresos) &&
        parseFloat(ingresos) > 0 &&
        parseFloat(egresos) >= 0
    ) {
        if (parseFloat(egresos) > parseFloat(ingresos)) {
            document.getElementById("errEgresos").textContent = "No puede ser mayor que ingresos";
            valido = false;
        }
    }

    // ===== MONTO =====
    if (monto === "") {
        document.getElementById("errMonto").textContent = "Campo obligatorio";
        valido = false;
    } else if (!esNumero(monto)) {
        document.getElementById("errMonto").textContent = "Solo números";
        valido = false;
    } else if (esNegativo(monto)) {
        document.getElementById("errMonto").textContent = "ingrese un valor correcto";
        valido = false;
    } else if (parseFloat(monto) < 100 || parseFloat(monto) > 100000) {
        document.getElementById("errMonto").textContent = "Entre 100 y 100000";
        valido = false;
    }

    // ===== PLAZO =====
    if (plazo === "") {
        document.getElementById("errPlazo").textContent = "Campo obligatorio";
        valido = false;
    } else if (!esNumero(plazo)) {
        document.getElementById("errPlazo").textContent = "Solo números";
        valido = false;
    } else if (esNegativo(plazo)) {
        document.getElementById("errPlazo").textContent = "No puede ser negativo";
        valido = false;
    } else if (plazo.length > 2) {
        document.getElementById("errPlazo").textContent = "Máximo 2 dígitos";
        valido = false;
    } else if (parseInt(plazo) < 1 || parseInt(plazo) > 30) {
        document.getElementById("errPlazo").textContent = "Entre 1 y 30 años";
        valido = false;
    }

    // ===== TASA INTERÉS (MAX 2 DÍGITOS) =====
    if (tasa === "") {
        document.getElementById("errTasaInteres").textContent = "Campo obligatorio";
        valido = false;
    } else if (!esNumero(tasa)) {
        document.getElementById("errTasaInteres").textContent = "Ingrese solo números";
        valido = false;
    } else if (esNegativo(tasa)) {
        document.getElementById("errTasaInteres").textContent = "Ingrese un valor correcto";
        valido = false;
    } else if (tasa.length > 2) {
        document.getElementById("errTasaInteres").textContent = "Máximo 2 dígitos";
        valido = false;
    } else if (parseFloat(tasa) < 1 || parseFloat(tasa) > 50) {
        document.getElementById("errTasaInteres").textContent = "Entre 1% y 50%";
        valido = false;
    }

    // 🚫 SI HAY ERRORES → NO CALCULA
    if (!valido) return;

    // ✅ TODO OK → CALCULAR
    ingresos = parseFloat(ingresos);
    totalGastos = parseFloat(totalGastos);
    monto = parseFloat(monto);
    plazo = parseFloat(plazo);
    tasa = parseFloat(tasa);


    arriendo = parseFloat(arriendo) || 0;
    alimentacion = parseFloat(alimentacion) || 0;
    varios = parseFloat(varios) || 0;

    let totalGastos = arriendo + alimentacion + varios;
    mostrarEnSpan("spnTotalGastos", totalGastos.toFixed(2));


    let disponible = calcularDisponible(ingresos, totalGastos);
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));

    let capacidadPagoMensual = calcularCapacidadPago(disponible);
    mostrarEnSpan("spnCapacidadPago", capacidadPagoMensual.toFixed(2));

    let interes = calcularInteresSimple(monto, tasa, plazo);
    mostrarEnSpan("spnInteresPagar", interes.toFixed(2));

    let totalPagar = calcularTotalPagar(monto, interes);
    mostrarEnSpan("spnTotalPrestamo", totalPagar.toFixed(2));

    let cuotaMensual = calcularCuotaMensual(totalPagar, plazo);
    mostrarEnSpan("spnCuotaMensual", cuotaMensual.toFixed(2));

    let estadoCredito = aprobarCredito(capacidadPagoMensual, cuotaMensual);
    mostrarEnSpan("spnEstadoCredito", estadoCredito);
}


function tieneEspacios(valor) {
    return valor.trim() !== valor || valor.includes(" ");
}


function reiniciar() {
    document.getElementById("txtIngresos").value = "";
    //document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    document.getElementById("txtArriendo").value = "";
    document.getElementById("txtAlimentacion").value = "";
    document.getElementById("txtVarios").value = "";
    mostrarEnSpan("spnTotalGastos", "");

    mostrarEnSpan("spnDisponible", "");
    mostrarEnSpan("spnCapacidadPago", "");
    mostrarEnSpan("spnInteresPagar", "");
    mostrarEnSpan("spnTotalPrestamo", "");
    mostrarEnSpan("spnCuotaMensual", "");
    mostrarEnSpan("spnEstadoCredito", "ANALIZANDO...");
    limpiarErrores();
}
