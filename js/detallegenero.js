//Endpoints
let urldiscovermovie = `https://api.themoviedb.org/3/discover/movie?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
let urldiscovertv = `https://api.themoviedb.org/3/discover/tv?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
 
//Capturar la qs
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get('id');
 
 
//Capturar elementos
let lista_generos_peliculas = document.querySelector(".lgp")
let lista_generos_serie = document.querySelector(".lgs")
let h2Peliculas = document.querySelector(".otroclass1")
let h2Series = document.querySelector(".otroclass2")
 
 
//Fetch de generos peliculas
fetch (urldiscovermovie)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data.results);
    let peliculas = data.results;
    if (peliculas.length > 0){
        let contenido = ""
        for (let i = 0; i<5; i++){
            contenido += `
            `
        };
        lista_generos_peliculas.innerHTML = contenido;
    } else {
        lista_generos_peliculas.innerHTML = `<h2> No hay peliculas para el genero seleccionado</h2>`
    }    
})
.catch(function(error){
    return error
})
 
 
//Fetch de generos series
fetch(urldiscovertv)
.then(function(res){
    return res.json()
})
.then (function(data) {
    console.log(data.results)
    let series = data.results;
    if (series.length > 0) {
        let contenido2 = ""
        for (let i = 0; i <5; i++) {
            contenido2 += `falta aca
           
           
           
            `
        };
        lista_generos_serie.innerHTML = contenido2;
    } else {
    lista_generos_serie.innerHTML = `<h2> No hay series para el genero seleccionado </h2>`
    }
})
.catch(function(error){
    return error
})
 
