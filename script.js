function actualizarTabla() {
    var gasto = document.getElementById("Gasto").value;
    var tabla = document.getElementById("tablaGastos");

    if (gasto === "Administrativo") {
        tabla.innerHTML = `
        <div style="display: flex; gap: 20px; justify-content: center;">
            <table border="1"> 
                <tr>
                    <td>Solicita</td>
                    <td>
                        <select id="selectorHoja1">
                            <option value="" disabled selected>¿Quién solicita?</option>
                        </select>
                    </td>
                    <td>No. Gasto</td>
                    <td><input type="text" name="Gasto" placeholder="Coloca No. Gasto..."/></td>
                    <td>Fecha</td>
                </tr>
            </table>
            <table border="1"> 
                <tr>
                    <td>Pre cotización</td>
                    <td><input type="radio" id="preCotizacion" name="tipoCotizacion" value="pre-cotizacion" onclick="toggleSections()" required checked/></td>
                    <td>Cotización</td>
                    <td><input type="radio" id="cotizacion" name="tipoCotizacion" value="cotizacion" onclick="toggleSections()" required/></td>
                    <td><input type="date" name="Fecha" /></td>
                </tr>
            </table>
            <table border="1"> 
                <tr>
                    <td>Empresa</td>
                    <td>
                        <div style="display: flex; align-items: center;">
                            <select id="empresa_options" name="empresa_options" class="dropdown" onchange="changeLogo()" required>
                                <option value="null">Selecciona empresa</option>
                                <option value="Cafftal">Cafetal</option>
                                <option value="Edificaciones">Edificaciones</option>
                                <option value="Fresh & Limp">Fresh & Limp</option>
                                <option value="ESVA">ESVA</option>
                                <option value="Ofic. Servicios">Ofic. Servicios</option>
                                <option value="Ofic. Proyectos">Ofic. Proyectos</option>
                                <option value="UR">UR</option>
                                <option value="Personal">Personal</option>
                                <option value="Servicio">Servicio</option>
                                <option value="Otros">Otros</option>                                                                                                                                                                                         
                            </select>
                        </div>
                    </td>
                    <td>Zona</td>
                    <td colspan="2">
                        <div style="display: flex; align-items: center;">
                            <select id="zona_options" name="zona_options" class="dropdown">
                                <option value="null">Selecciona una zona</option>
                                <option value="GDL">GDL</option>
                                <option value="PUE">PUE</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Compra solicitada</td>
                    <td colspan="7"><input type="text" name="Compra" placeholder="Me gustaría solicitar...." style="width: 100%;"/></td>
                </tr>
                <tr>
                    <td>Coordinador</td>
                    <td>
                        <select id="selectorHoja1">
                            <option value="" disabled selected>¿Quién es el coordinador?</option>
                        </select>
                    </td>
                    <td>Anticipo</td>
                    <td colspan="2">
                     <input type="text" oninput="formatCurrency(this)" placeholder="Ingrese cantidad"> 
                    </td>
                </tr>
            </table>
        </div>
        `;
    } else if (gasto === "Servicio") {
        tabla.innerHTML = `
        <div style="display: flex; gap: 20px; justify-content: center;">
            <table border="1"> 
                <tr>
                    <td>Folio</td>
                    <td>
                        <div style="display: flex; align-items: center;">
                            <input type="text" id="folio" name="Folio" placeholder="Introduce No. Folio..." />
                        </div>
                    </td>
                    <td>Pre cotización</td>
                    <td><input type="radio" id="preCotizacion" name="tipoCotizacion" value="pre-cotizacion" required checked/></td>
                    <td>Cotización</td>
                    <td><input type="radio" id="cotizacion" name="tipoCotizacion" value="cotizacion" required/></td>
                    <td><input type="date" name="Fecha" /></td>
                </tr>
                <td>Empresa</td>
                <td>
                    <div style="display: flex; align-items: center;">
                    <select id="empresa_options" name="empresa_options" class="dropdown" onchange="changeLogo()" required>
                        <option value="null">Selecciona empresa</option>
                        <option value="ISI">ISI</option>
                        <option value="CSM">CSM</option>  
                        <option value="MIC">MIC</option>
                    </select>
                </div>
                </td>
                <td>Zona</td>
                <td>
                    <div style="display: flex; align-items: center;">
                        <select id="zona_options" name="zona_options" class="dropdown">
                            <option value="null">Selecciona zona...</option>
                            <option value="GDL">GDL</option>
                            <option value="MEX">MEX</option>
                            <option value="PUE">PUE</option>
                            <option value="QRO">QRO</option>
                            <option value="VER">VER</option>
                        </select>
                    </div>
                </td>
                <td>Fecha</td>
                <td>
                <input type="date"/>
                </td>
            </tr>
            </table>
        </div>
    <table border="1">
        <tr>
            <td>Atiende</td>
            <td>
                <select id="selectorHoja1">
                    <option value="" disabled selected>¿Quién atiende?</option>
                </select>
            </td>
            <td></td>
            <td>Planta</td>
            <td>Revolvedora</td>
            <td></td>
        </tr>
        <tr>
            <td>No. Cliente</td>
            <td>
                <select id="selectorHoja2">
                    <option value="" disabled selected>¿Quién es el cliente?</option>
                </select>
            </td> 

            <td>Servicio</td>
            <td><input type="checkbox"/></td>
            <td><input type="checkbox"/></td>
            <td>Monto solicitado</td>
        </tr>
        <tr>
            <td>Cliente</td>
            <td>
                <select id="selectorHoja2">
                    <option value="" disabled selected>¿Quién es el cliente?</option>
                </select>
            </td> 

            <td>Mov/Trasl</td>
            <td><input type="checkbox"/></td>
            <td><input type="checkbox"/></td>
            <td><input type="text" oninput="formatCurrency(this)" placeholder="Ingrese cantidad"></td>
        </tr>
        <tr>
            <td>Falla reportada</td>
            <td colspan="5"><input type="text" id="falla" name="falla" placeholder="Describe la falla..."></td>
        </tr>
    </table>   
        `;
    }
}

function seleccionarUnico(seleccionado, otro) {
    var seleccionadoElem = document.getElementById(seleccionado);
    var otroElem = document.getElementById(otro);

    if (seleccionadoElem.checked) {
        otroElem.checked = false;
    }
}

document.getElementById('Gasto').addEventListener('change', function() {
    const selectedOption = this.value;
    const header = document.querySelector('.header-container h1');

    if (selectedOption === 'Administrativo') {
        header.textContent = 'Gasto Administrativo';
    } else if (selectedOption === 'Servicio') {
        header.textContent = 'Gasto de Servicio';
    } else {
        header.textContent = 'Selecciona tipo de gasto';
    }
});

function limpiarFormulario() {
    // Encuentra el elemento de la tabla
    const tablaGastos = document.getElementById('tablaGastos');
    
    // Limpia el contenido de la tabla
    tablaGastos.innerHTML = '';
    
    // Si tienes otras áreas del formulario que deseas limpiar, puedes hacerlo aquí
    document.getElementById('Gasto').selectedIndex = 0;
    document.querySelector('.header-container h1').textContent = 'No. Folio';
}

function formatCurrency(input) {
    // Obtener el valor actual del campo de entrada sin formatear
    var value = input.value.replace(/[^0-9.-]/g, '');

    // Convertir el valor a un número flotante solo si es válido
    var floatValue = parseFloat(value);

    if (!isNaN(floatValue)) {
        // Guardar la posición del cursor
        var cursorPosition = input.selectionStart;

        // Formatear el valor como moneda en MXN
        var formattedValue = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(floatValue);

        // Actualizar el campo de entrada con el valor formateado
        input.value = formattedValue;

        // Restaurar la posición del cursor
        input.setSelectionRange(cursorPosition, cursorPosition);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var currencyInputs = document.querySelectorAll('input[type="text"][oninput="formatCurrency(this)"]');
    currencyInputs.forEach(function(input) {
        // Inicializar con un valor de 0 MXN
        input.value = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(0);
        input.addEventListener('input', function() {
            formatCurrency(input);
        });
    });
});


