let infoquery = location.search //me da un string con la query string
let query_a_oliteral = new URLSearchParams(infoquery) //creo un objeto litera con la query string
let id = query_a_oliteral.get("id") //obtengo el id de la propiedad del objeto literal

let urlseries = `https://api.themoviedb.org/3/tv/${id}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`

fetch (urlseries)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        //indice_peliculas = data.results

        titulo2 = document.querySelector(".tituloseries")
        calificacion2 =document.querySelector(".calificacionapi")
        imagen2 = document.querySelector(".imagenapi")
        sinopsis2 = document.querySelector(".sinopsisapi")
        estreno2 = document.querySelector(".fechaestrenoapi")
        genero2 =document.querySelector(".generoapi")

        for (let i=0; i<1; i++){
            titulo2.innerText = data.name
            calificacion2.innerText = "Calificacion" + " " + data.vote_average
            imagen2.innerHTML = `<div class="imagenapi"><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" class="imagenserie"></div>`
            sinopsis2.innerText = data.overview
            estreno2.innerText = "Fecha de Estreno:" + " " + data.first_air_date
            genero2.innerText = "Genero/s:" +  data.genres[0].name + " , " + data.genres[1].name
        }

    })
    .catch(function(error){
        console.log("el error es" + error);
    })


let urldondever = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=cd221d9b379938868090204c71bbef7e`
fetch (urldondever)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        indice_peliculas = data.results
        let dondever = document.querySelector(".dondever")

    for(let i=0 ; i<1; i++)
        dondever.innerText = indice_peliculas.US.flatrate[0].provider_name + " , " + indice_peliculas.US.flatrate[1].provider_name
        
    })
    .catch(function(error){
        console.log("el error es" + error);
    })
    


