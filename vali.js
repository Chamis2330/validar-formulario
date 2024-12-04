document.getElementById("registroForm").addEventListener("submit", function (event) {
    const numeroControl = document.getElementById("numeroControl").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const sexo = document.getElementById("sexo").value;
    const carrera = document.getElementById("carrera").value;
    const errorMensaje = document.getElementById("errorMensaje");

    // Limpia mensajes de error previos
    errorMensaje.textContent = "";

    // Validación del número de control
    const regexNumeroControl = /^(2[1-4])84\d{4}$/; // Formato: 2 dígitos (año), 2 dígitos (tecnológico), 4 dígitos (consecutivo)
    if (!regexNumeroControl.test(numeroControl)) {
        errorMensaje.textContent = "El número de control debe tener exactamente 8 dígitos y estar en el formato correcto.";
        event.preventDefault(); // Evita que el formulario se envíe
        return;
    }

    // Validación del nombre (solo letras y espacios)
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regexNombre.test(nombre)) {
        errorMensaje.textContent = "El nombre solo puede contener letras y espacios.";
        event.preventDefault();
        return;
    }

    
    // Validación del correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        errorMensaje.textContent = "Ingrese un correo electrónico válido.";
        event.preventDefault();
        return;
    }

    // Validación del teléfono
    const regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(telefono)) {
        errorMensaje.textContent = "El número de teléfono debe contener exactamente 10 dígitos.";
        event.preventDefault();
        return;
    }

    // Validación de fecha de nacimiento
    if (!fechaNacimiento) {
        errorMensaje.textContent = "Debe ingresar una fecha de nacimiento válida.";
        event.preventDefault();
        return;
    }

    // Validación de sexo
    if (sexo === "") {
        errorMensaje.textContent = "Debe seleccionar un sexo.";
        event.preventDefault();
        return;
    }

    // Validación de carrera seleccionada
    if (carrera === "") {
        errorMensaje.textContent = "Debe seleccionar una carrera.";
        event.preventDefault();
        return;
    }

    alert("Registro exitoso!");
});
