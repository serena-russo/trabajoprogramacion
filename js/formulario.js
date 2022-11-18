let formulario= document.querySelector("form");
let campoForm= document.querySelector("[name=buscador]");

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if ( campoForm.value == "") {
        alert("Debes escribir algo")
    } else if (campoForm.value.length <3){
        alert("Su búsqueda debe tener más de tres caracteres")
    }else {
        this.submit()
    }

    
})