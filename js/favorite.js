/// formulario principal 

///if (serena.lenght == 0);
///    let alert1 = document.querySelector(".serena");
  ///  probando.addEventListener("submit" , function(){
   ///  alert("el campo de busqueda esta vacio");
  ///  })
///elif (serena.lenght<3);
   /// let alert2 = document.querySelector(".serena");
   /// probando.addEventListener("submit" , function(){
  ///      alert("el termino buscado debe tener al menos tres caracteres");
   // })

let alert1 = document.querySelector(".serena");
probando.addEventListener("click" , function(){
    alert("el campo de busqueda esta vacio");
})


//favoritos


let storage = localStorage.getItem(".containerfavoritos")
let favorite = JSON.parse(storage); 

let section = document.querySelector(".containerfavortos")

let peliculasFavs = []

if (favorite.lenght == 0){
    <p>No hay peliculas en favoritos</p>
}
else{
    for (let i = 0; i < favorite.length; i++) {
        let url = array[i];
        
    }
}
