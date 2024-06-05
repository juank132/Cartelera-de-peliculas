const tarjetas = require("./variables")
const axios = require("axios")
const promesa = axios.get(`http://localhost:3001/movies`);



promesa

.then((res) => {

  console.log(res.data)

  function iterarImagen(tar,i) {
        const e = res.data[i];
  
        tar.style.backgroundImage = `url('${e.poster}')`;
        tar.querySelector('.title').append(e.title);
        tar.querySelector('.director').append(e.director); 
        tar.querySelector('.rate').append(e.rate); 
        tar.querySelector('.year').append(e.year) ;
        tar.querySelector('.genre').append( e.genre); 
        tar.querySelector('.duration').append(e.duration);
  };
  
  tarjetas.forEach(iterarImagen);
})

.catch((err) =>{
    console.log(err);
})



module.exports = promesa;


