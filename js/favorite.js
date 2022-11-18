let storage = localStorage.getItem("favoritos") 
let favorite = JSON.parse(storage); 

let section = document.querySelector(".containerfavortos")

let peliculasFavs = []

if (favorite.length == 0){
    section.innerHTML = '<p>No hay peliculas en favoritos</p>' 
}
else{
    for (let i = 0; i < favorite.length; i++) {
        let url = peliculasFavs[i]; 
    }
} 

