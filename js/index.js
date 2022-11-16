//Peliculas Populares
let urlindex1 = "https://api.themoviedb.org/3/movie/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1"

fetch (urlindex1)
.then (function(res){
    return res.json();
})
.then (function(data){
    console.log(data);
    let index_peliculas = data.results
    let hola = document.querySelector(".contenedoresinicio")
    let todas_las_peliculas = []

    for (let i=0; i<10; i++) {
        console.log(index_peliculas[i]);
        todas_las_peliculas += `<article class="nomesale imagenes">
        <img src="https://image.tmdb.org/t/p/w500${index_peliculas[i].poster_path}" alt="${index_peliculas[i].title}">
        <h3><a href=detail-movie.htl?id=${index_peliculas[i].id}">${index_peliculas[i].title}</a></h3>
        <p class="release_date">${index_peliculas[i].release_date}
        </article> `
    }
    hola.innerHTML = todas_las_peliculas
})

//Series Populares
let urlindex2 = "https://api.themoviedb.org/3/tv/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1"
fetch (urlindex2)
.then (function(res){
    return res.json();
})
.then (function(data){
    console.log(data);
    let index_peliculas2 = data.results
    let hola2 = document.querySelector(".perro")
    let todas_las_peliculas2 = []
  
    for (let i=0; i<10; i++) {
        console.log(index_peliculas2[i]);
        todas_las_peliculas2 += `<article class="nomesale imagenes">
        <img src="https://image.tmdb.org/t/p/w500${index_peliculas2[i].poster_path}" alt="${index_peliculas2[i].name}">
        <h3 class ="sereprobando"><a href=detail-movie.htl?id=${index_peliculas2[i].id}">${index_peliculas2[i].name}</a></h3>
        <p class="first_air_date">${index_peliculas2[i].first_air_date}</p>
        </article> `
    }
    hola2.innerHTML = todas_las_peliculas2
})

//Lo mas valorado en series
let urlindex3 = "https://api.themoviedb.org/3/tv/top_rated?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1"
fetch (urlindex3)
.then (function(res){
    return res.json();
})
.then (function(data){
    console.log(data);
    let index_peliculas3 = data.results
    let hola3 = document.querySelector(".gato")
    let todas_las_peliculas3 = []
    
    for (let i=0; i<10; i++) {
        console.log(index_peliculas3[i]);
        todas_las_peliculas3 += `<article class="nomesale imagenes">
        <img src="https://image.tmdb.org/t/p/w500${index_peliculas3[i].poster_path}" alt="${index_peliculas3[i].name}">
        <h3 class = "sereprobando"><a href=detail-movie.htl?id=${index_peliculas3[i].id}">${index_peliculas3[i].name}</a></h3>
        <p class="first_air_date"">${index_peliculas3[i].first_air_date}</p>
        </article> `
    }
    hola3.innerHTML = todas_las_peliculas3
})