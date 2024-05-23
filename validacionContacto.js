let a = document.querySelector("#FormContacto")
let validarDatos = (e) => {
    e.preventDefault();
let validacion = true;

    let inputNombre = document.querySelector("#nombre");
    if (inputNombre.value === ""){
        let divError = document.querySelector("#errorNombre")
        divError.textContent = "El campo Nombre no puede quedar vacio"

        inputNombre.classList.add("error")

        validacion = false
    }

        if (validacion){
            a.submit();
        }
}
a.addEventListener('submit',validarDatos)