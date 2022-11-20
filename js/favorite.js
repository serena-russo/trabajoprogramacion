let storage = localStorage.getItem("favoritos") 
let favorite = JSON.parse(storage); 

let listaPeliculas = document.querySelector(".pelisul");
let listaSeries = document.querySelector(".seriesul"); 

let section = document.querySelector(".containerfavortos")

let peliculasFavs = [] 

if (favorite == null || favorite.length == 0) {
    section.innerHTML = '<p>No hay peliculas en favoritos</p>' 
}
else{
    for (let i = 0; i < favorite.length; i++) {
        let urlPelis = `https://api.themoviedb.org/3/movie/${favorite[i]}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US` 

        
        fetch(urlPelis)
            .then(function (respuesta) {
                return respuesta.json()

            })
            .then(function (data) {
                console.log(data)

                peliculasFavs +=  `<li class="popularesinicio">
                <a href="./resenapelis.html?idPelicula=${data.id}"><img class="imagenes" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt=" ${data.title}"   
                    height="250px">
                    <ul class="lista_anidada">
                        <li class="popularesinicio"> ${data.title} </li>
                        <li class="popularesinicio"> Estreno: ${data.release_date} </li>
                        <li class="popularesinicio"> Ver más </li>
                    </ul> </a> 
            </li>`
                listaPeliculas.innerHTML = peliculasFavs; 
})
            .catch(function (error) {
                return error

        })
    }
}

let seriesFavs = []
if (favorite == null || favorite.length == 0) {
    section.innerHTML = '<p> No hay series en favoritos </p>'

} else {
    for (let i = 0; i < favorite.length; i++) {
        let urlSeries = `https://api.themoviedb.org/3/tv/${favorite[i]}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`

        fetch(urlSeries)
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (data) {
                console.log(data)
                seriesFavs +=  `<li class="popularesinicio">
                <a href="./resenaseries.html?idPelicula=${data.id}"><img class="imagenes" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt=" ${data.title}"   
                    height="250px">
                    <ul class="lista_anidada">
                        <li class="popularesinicio"> ${data.title} </li>
                        <li class="popularesinicio"> Estreno: ${data.release_date} </li>
                        <li class="popularesinicio"> Ver más </li>
                    </ul> </a> 
            </li>`
                listaSeries.innerHTML = seriesFavs;


            })
            .catch(function (error) {
                return error

            })

    }
}
