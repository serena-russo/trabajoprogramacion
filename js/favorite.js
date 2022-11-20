let storage = localStorage.getItem("favoritos") 
let favorite = JSON.parse(storage); 

let listaPeliculas = document.querySelector(".pelisul");
let listaSeries = document.querySelector(".seriesul"); 

let section = document.querySelector(".containerfavortos")

let peliculasFavs = []

if ( favorite == null || favorite.length == 0) {
    section.innerHTML = '<p>No hay peliculas en favoritos</p>' 
}
else{
    for (let i = 0; i < favorite.length; i++) {
        let urlPelis = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${api_key}&language=en-US` 

        
        fetch(urlPelis)
            .then(function (respuesta) {
                return respuesta.json()

            })
            .then(function (data) {
                console.log(data)

                peliculasFavs += //FALTA ALGO
                listaPeliculas.innerHTML = peliculasFavs;
})
            .catch(function (error) {
                return error

        })
    }
}

let seriesFavs = []
if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p> No hay series en favoritos </p>'

} else {
    for (let i = 0; i < favoritos.length; i++) {
        let urlSeries = `https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=${api_key}&language=en-US`

        fetch(urlSeries)
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (data) {
                console.log(data)
                seriesFavs += // FALTA ALGO
                listaSeries.innerHTML = seriesFavs;


            })
            .catch(function (error) {
                return error

            })

    }
}
