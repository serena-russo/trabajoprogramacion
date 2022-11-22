//Endpoints
let urldiscovermovie = `https://api.themoviedb.org/3/discover/movie?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate` 
let urldiscovertv = `https://api.themoviedb.org/3/discover/tv?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

//Capturar la qs y ApiKey
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get('idGenero');
let api_key = "cd221d9b379938868090204c71bbef7e"

//Capturar elementos 
let lista_generos_peliculas = document.querySelector(".lgp")
let lista_generos_serie = document.querySelector(".lgs")
let h2Peliculas = document.querySelector(".otroclass1")
let h2Series = document.querySelector(".otroclass2")


//Fetch del generos peliculas
fetch (urldiscovermovie) 
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    let index_peliculas = data.results

})

