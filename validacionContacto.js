let FormContacto = document.querySelector("#FormContacto")

let validarDatos = (e) => {
    e.preventDefault();
    
    let validacion = true;

    let inputNombre = document.querySelector("#nombre");
    if (inputNombre.value === ""){
        let divError = document.querySelector("#errorNombre")
        divError.textContent = "El campo Nombre no puede quedar vacio"

        inputNombre.classList.add("error")

        validacion = false;
    }

    let inputApellido = document.querySelector("#Apellido");
    if (inputApellido.value === ""){
        let divError = document.querySelector("#errorApellido")
        divError.textContent = "El campo Apellido no puede quedar vacio"

        inputApellido.classList.add("error")

        validacion = false;
    }

    let inputEmail = document.querySelector("#email");
    if (inputEmail.value === ""){
        let divError = document.querySelector("#errorEmail")
        divError.textContent = "El campo Email no puede quedar vacio"

        inputEmail.classList.add("error")

        validacion = false;
    }

    let inputFecha = document.querySelector("#FechadeReserva");
    if (inputFecha.value === ""){
        let divError = document.querySelector("#errorFecha")
        divError.textContent = "El campo Fecha de reserva no puede quedar vacio"

        inputFecha.classList.add("error")

        validacion = false;
    }

    let inputActividad = document.querySelector("#Actividades");
    if (inputActividad.value === "---Selecione una actividad---"){
        let divError = document.querySelector("#errorActividad")
        divError.textContent = "El campo Lugar para reservar no puede quedar vacio"

        inputActividad.classList.add("error")

        validacion = false;
    }

    let inputCantidad = document.querySelector("#Cantidad");
    if (inputCantidad.value === "---Selecione la cantidad de personas---"){
        let divError = document.querySelector("#errorCantidad")
        divError.textContent = "El campo Cantidad de personas no puede quedar vacio"

        inputCantidad.classList.add("error")

        validacion = false;
    }

    let inputmensaje = document.querySelector("#mensaje");
    if (inputmensaje.value === ""){
        let divError = document.querySelector("#errorComentario")
        divError.textContent = "El campo Comentario no puede quedar vacio"

        inputmensaje.classList.add("error")

        validacion = false;
    }

    if (validacion){
            FormContacto.submit();
        }
}
FormContacto.addEventListener('submit',validarDatos);