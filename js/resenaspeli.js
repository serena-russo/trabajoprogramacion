let urlmovie = `https://api.themoviedb.org/3/movie/${id}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`


fetch (urlmovie)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        let uno = document.querySelector('.titulopelidetalle')
        let dos = document.querySelector('.glitch')
        let tres = document.querySelector ('.sinopsisapi')
        let cuatro = document.querySelector ('.estrella')
        let cinco = document.querySelector ('.fecheestrenoapi')
        let seis = document.querySelector ('.generoapi')

    })
    .catch(function(error){
        console.log("el error es:" + error);
    })