let capqs = location.search
let qsobjetolit = new URLSearchParams(capqs)
let inputb = qsobjetolit.get("buscador")

let urlsearchmovie = `https://api.themoviedb.org/3/search/movie?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&query=${inputb}&page=1&include_adult=false`

fetch (urlsearchmovie) 
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    let index_peliculas = data.results
    let contenedor = document.querySelector(".contenedoresinicio")
    let lista_peliculas = []

    for (let i = 0 ; i<5; i++){
        lista_peliculas +=` <article><a class="popularesinicio" href="./resenapelis.html?id=${index_peliculas[i].id}"><img class="imagenes" src="https://image.tmdb.org/t/p/w500${index_peliculas[i].poster_path}" alt="${index_peliculas[i].poster_path}"><p class="popularesinicio nombrepeliapi">${index_peliculas[i].title}</p></a></article>
        <p class="releaseDate popularesinicio">${index_peliculas[i].release_date}</p>`
    }
    contenedor.innerHTML = lista_peliculas

})

.catch(function(e){
    console.log(e); 
})

let urlsearchtv = `https://api.themoviedb.org/3/search/tv?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&query=${inputb}page=1&include_adult=false`
fetch (urlsearchtv) 
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    let index_peliculas = data.results
    let contenedor = document.querySelector(".contenedoresinicio")
    let lista_peliculas = []

    for (let i = 0 ; i<5; i++){
        lista_peliculas +=` <article><a class="popularesinicio" href="./resenaseries.html?id=${index_peliculas[i].id}"><img class="imagenes" src="https://image.tmdb.org/t/p/w500${index_peliculas[i].poster_path}" alt="${index_peliculas[i].poster_path}"><p class="popularesinicio nombrepeliapi">${index_peliculas[i].title}</p></a></article>
        <p class="releaseDate popularesinicio">${index_peliculas[i].first_air_date}</p>`
    }
    contenedor.innerHTML = lista_peliculas
})  



    
