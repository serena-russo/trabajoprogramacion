let capqs = location.search
let qsobjetolit = new URLSearchParams(capqs)
let input = qsobjetolit.get(".inputboton")

let urlsearchmovie = `https://api.themoviedb.org/3/search/movie?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&query=batman&page=1&include_adult=false`
//`https://api.themoviedb.org/3/search/movie?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&query=${input}&page=1&include_adult=false`


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
        lista_peliculas +=` <article><a class="popularesinicio" href="./resenaseries.html"><img class="imagenapisearch" src="https://image.tmdb.org/t/p/w500${index_peliculas[i].poster_path}" alt="${index_peliculas[i].poster_path}"><p class="popularesinicio nombrepeliapi">${index_peliculas[i].title}</p></a></article>
        <p class="releaseDate popularesinicio">${index_peliculas[i].release_date}</p>`
    }
    contenedor.innerHTML = lista_peliculas

})




.catch(function(e){
    console.log(e); 
})
//vincular con css broo!!