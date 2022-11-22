//API keys y los endpoints
let api_key = "cd221d9b379938868090204c71bbef7e";
let urlmovie = `https://api.themoviedb.org/3/genre/movie/list?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`
let urltv = `https://api.themoviedb.org/3/genre/tv/list?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`

//Capturamos elementos
let seccionGeneros= document.querySelector(".pelis7")
let seccionGenerosSeries= document.querySelector(".series7")


//* Fetch de los generos peliculas*//
fetch(urlmovie)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data);
    generos = data.genres
    contenido = ''

    for (let i = 0; i < generos.length; i++) {
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


//* Fetch de los generos series*//
fetch(urltv)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    let generoseries = data.genres
    let contenido2=""
    for (let i = 0; i < generoseries.length; i++) {
        contenido2+= `<ul class="ulgeneros">
        <li>${generoseries[i].name}</li>
         <a class="bgeneros" href="./detallegeneros.html?idGenero=${generoseries[i].id}"></a>
     </ul> `   
    }
    seccionGenerosSeries.innerHTML=contenido2
})
.catch(function (error) {
    return error 
})