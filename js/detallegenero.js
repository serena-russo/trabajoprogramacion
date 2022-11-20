let urldiscovermovie = `https://api.themoviedb.org/3/discover/movie?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate` 

let urldiscovertv = `https://api.themoviedb.org/3/discover/tv?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`


fetch (urldiscovermovie) 
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    let index_peliculas = data.results

})

