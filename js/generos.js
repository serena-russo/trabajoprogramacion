//API keys y los endpoints
let api_key = "cd221d9b379938868090204c71bbef7e";
let urlmovie = `https://api.themoviedb.org/3/genre/movie/list?${api_key}=cd221d9b379938868090204c71bbef7e&language=en-US`
let urltv = `https://api.themoviedb.org/3/genre/tv/list?${api_key}=cd221d9b379938868090204c71bbef7e&language=en-US`

//capturamos elementos
let seccionGeneros= document.querySelector(".cpgeneros")
let seccionGenerosSeries= document.querySelector(".cpgeneros")


/* fetch de los generos peliculas*/
fetch(url)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    generos = data.generos
    contenido = ''

    for (let i = 0; i < 10; i++) {
        contenido +=`<ul class="ulgeneros">
                       <li>${generos[i].name}</li>
                        <a class="bgeneros" href="./detallegeneros.html?idGenero=${generos[i].id}"></a>
                    </ul> `
    }
    seccionGeneros.innerHTML= contenido

    
})
.catch(function (error) {
    return error
})


/* fetch de los generos series*/
fetch(urlSeries)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    let generosSeries=data.genres
    let contenido2=""
    for (let i = 0; i < 10; i++) {
        contenido2+= `<ul class="ulgeneros">
        <li>${GenerosSeries[i].name}</li>
         <a class="bgeneros" href="./detallegeneros.html?idGenero=${GenerosSeries[i].id}"></a>
     </ul> `   
    }
    seccionGenerosSeries.innerHTML=contenido2
})
.catch(function (error) {
    return error 
})