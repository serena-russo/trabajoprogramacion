let infoquery = location.search //me da un string con la query string
let query_a_oliteral = new URLSearchParams(infoquery) //creo un objeto litera con la query string
let id = query_a_oliteral.get("id") //obtengo el id de la propiedad del objeto literal

let urlresenapelis = `https://api.themoviedb.org/3/movie/${id}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`



fetch (urlresenapelis)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        indice_peliculas = data.results

        let titulo = document.querySelector(".titulopelidetalle")
        let calificacion = document.querySelector(".calificacionapi")
        let imagen = document.querySelector(".imagenapi1")
        let sinopsis =document.querySelector(".sinopsisapi")
        let estreno = document.querySelector(".fechaestrenoapi")
        let genero = document.querySelector(".generoapi")
        let duracion = document.querySelector(".duracion")

        for (let i=0; i<1; i++){
            titulo.innerText = data.title
            sinopsis.innerText = data.overview
            calificacion.innerText = "Calificacion" + " " + data.vote_average
            estreno.innerText = "Fecha de Estreno:" + " " + data.release_date 
            genero.innerText = "Genero/s:" + " " + data.genres[0].name + " , " + data.genres[1].name 
            imagen.innerHTML = `<div class="imagenapi1"><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" class="imagenapi"></div>`
            duracion.innerText = "Duracion:" + " " + data.runtime + " " + "min"
        }
    })
    .catch(function(error){
        console.log("el error es" + error);
    })


let urldondever = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=cd221d9b379938868090204c71bbef7e`
fetch (urldondever)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        indice_peliculas = data.results
        let dondever = document.querySelector(".dondever")

    for(let i=0 ; i<1; i++)
          dondever.innerText = indice_peliculas.US.buy[0].provider_name + " , " +indice_peliculas.US.buy[1].provider_name + " , " + indice_peliculas.US.buy[2].provider_name
        
        })
    .catch(function(error){
          console.log("el error es" + error);
      })
    