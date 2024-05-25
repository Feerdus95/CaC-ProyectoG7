let a = document.querySelector("#FormContacto")
let validarDatos = (e) => {
    e.preventDefault();
    let validacion = true;

    let inputNombre = document.querySelector("#nombre");
    if (inputNombre && inputNombre.value.trim() === "") {
        let divError = document.querySelector("#errorNombre");
        if (divError) {
            divError.textContent = "El campo Nombre no puede quedar vacío";
        }
    
        if (inputNombre) {
            inputNombre.classList.add("error");
        }
    
        validacion = false;
    } else if (inputNombre.value.length < 3 || inputNombre.value.length > 20) {
        let divError = document.querySelector("#errorNombre");
        if (divError) {
            divError.textContent = "El nombre debe tener entre 3 y 20 caracteres";
        }
    
        if (inputNombre) {
            inputNombre.classList.add("error");
        }
    
        validacion = false;
    }

    let inputApellido = document.querySelector("#apellido");
    if (inputApellido && inputApellido.value.trim() === "") {
        let divError = document.querySelector("#errorApellido");
        if (divError) {
            divError.textContent = "El campo Apellido no puede quedar vacio";
        }

        if (inputApellido) {
            inputApellido.classList.add("error");
        }

        validacion = false;
    }

    let inputEmail = document.querySelector("#email");
    if (inputEmail && inputEmail.value.trim() === "") {
        let divError = document.querySelector("#errorEmail");
        if (divError) {
            divError.textContent = "El campo Email no puede quedar vacío";
        }
    
        if (inputEmail) {
            inputEmail.classList.add("error");
        }
    
        validacion = false;
    } else if (!inputEmail.value.includes("@") || !inputEmail.value.includes(".com")) {
        let divError = document.querySelector("#errorEmail");
        if (divError) {
            divError.textContent = "Por favor, ingresa una dirección de correo electrónico válida";
        }
    
        if (inputEmail) {
            inputEmail.classList.add("error");
        }
    
        validacion = false;
    }

    let inputFecha = document.querySelector("#FechadeReserva");
    if (inputFecha && inputFecha.value.trim() === "") {
        let divError = document.querySelector("#errorFecha");
        if (divError) {
            divError.textContent = "El campo Fecha de reserva no puede quedar vacio";
        }

        if (inputFecha) {
            inputFecha.classList.add("error");
        }

        validacion = false;
    }

    let inputActividad = document.querySelector("#Actividades");
    if (inputActividad && inputActividad.value.trim() === "") {
        let divError = document.querySelector("#errorActividad");
        if (divError) {
            divError.textContent = "El campo Lugar para reservar no puede quedar vacio";
        }

        if (inputActividad) {
            inputActividad.classList.add("error");
        }

        validacion = false;
    }

    let inputCantidad = document.querySelector("#Cantidad");
    if (inputCantidad && inputCantidad.value.trim() === "") {
        let divError = document.querySelector("#errorCantidad");
        if (divError) {
            divError.textContent = "El campo Cantidad de personas no puede quedar vacio";
        }

        if (inputCantidad) {
            inputCantidad.classList.add("error");
        }

        validacion = false;
    }

    let inputMensaje = document.querySelector("#mensaje");
    if (inputMensaje && inputMensaje.value.trim() === "") {
        let divError = document.querySelector("#errorComentario");
        if (divError) {
            divError.textContent = "El campo Comentario no puede quedar vacio";
        }

        if (inputMensaje) {
            inputMensaje.classList.add("error");
        }

        validacion = false;
    }

    if (validacion) {
        a.submit();
    }
}
a.addEventListener('submit',validarDatos)