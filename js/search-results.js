let capqs = location.search
let qsobjetolit = new URLSearchParams(capqs)
let input = qsobjetolit.get(".inputboton")

let urlindex1 = `
https://api.themoviedb.org/3/search/movie?api_key=https%3A%2F%2Fus04web.zoom.us%2Fj%2F75086551788%3Fpwd%3DQ7vbGW8BiLHU6FFdZwahpWAPA3MfaF.1&language=en-US&query=${input}&page=1&include_adult=false`

fetch (urlindex1) 
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    let index_peliculas = data.results
    let resultado_busqueda = document.querySelector(".resultadobusqueda")
    let del_section = document.querySelector(".contenedoresinicio")
    let imagen = document.querySelector(".imagen")
    let formulario = document.querySelector(".formulario")
    let todas_las_peliculas = []

    for (let i = 0 ; i<6; i++){
        
    ///else 
      ///  resultado_busqueda.innerHTML = ("No hay resultado para su busqueda")
}

})




.catch(function(e){
    console.log(e); ///preguntar si esto va aca o al final 
})