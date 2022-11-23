let formulario= document.querySelector("form");

let campoForm= document.querySelector("[name=buscador]");
campoForm.addEventListener('blur', function(){ // cuando toque fuera del campo, este se vacie 
    campoForm.value = ""
})


formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (campoForm.value == "") { // chequeo si el campo esta completo
        alert("Debes escribir algo") 
    } else if (campoForm.value.length <3){
        alert("Su búsqueda debe tener más de tres caracteres")
    }else {
        this.submit() // funcion de javascript que se encarga de mandar el formulario si no hay errores
    }

    
})