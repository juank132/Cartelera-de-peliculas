const formulario = document.querySelector("#agregarp");
const inputs = document.getElementsByTagName('input');
const limpiar = document.getElementById('unic1');
const axios = require("axios");
const promes = require("./index");


promes

.then((res) => {
  
  
  
  const createHtml = () => {
    
    let html = ''
    for (let i = 3; i < res.data.length; i++) {
      const {title,year,director,duration,genre,rate,poster} = res.data[i]

      html += `
      <div class="tarjeta_pelicula1"  style="background-image: url('${poster}')">

            <div class="infoT">

              <h2 class="title">${title}</h2>
                <p class="director">${director}</p>
                <h5 class="rate">${rate}</h5>
                <h3 class="year">${year}</h3>
                <h4 class="genre">${genre}</h4>
                <p class="duration">${duration}</p>

            </div>

          </div> `;
        
        }
        
        document.querySelector('.contenedor_peliculas1').innerHTML = html
        
      }
      
    createHtml()
    })
    
    
    .catch((err) =>{
      console.log(err);
    })
    


const limpiarIn = (event) => {
  event.preventDefault();

  const genreCheckboxes = document.querySelectorAll('input[name="genrec"]:checked');

  genreCheckboxes.forEach( box => {box.checked = false})

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }

}


const handleSubmit = async (event) => {
    event.preventDefault();
    

    const genreCheckboxes = document.querySelectorAll('input[name="genrec"]:checked');

    const Ititle = document.querySelector('.Title');
    const Iyear = document.querySelector('.Year');
    const Idirector = document.querySelector('.Director');
    const Iduration = document.querySelector('.Duration');
    const Igenre = [];
    const Iurl = document.querySelector('.Urldeimagen');
    const Irate = document.querySelector('.Rate');
    
    
    genreCheckboxes.forEach((checkbox) => {
      Igenre.push(checkbox.value);
    });

    const title = Ititle.value ;
    const year = Iyear.value ;
    const director = Idirector.value ;
    const duration = Iduration.value ;
    const genre = Igenre ;
    const rate = Irate.value ;
    const poster = Iurl.value ;
  

    if (!title || !year || !director|| !duration|| !genre|| !rate|| !poster) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const newMovie = {title,year,director,duration,genre,rate,poster}

    try {
     
      await axios.post('http://localhost:3001/movies',newMovie)
      alert('Los datos se enviaron correctamente')

    } catch (error) {
      console.log(error.message);
    }

};

limpiar.addEventListener("click", limpiarIn);

formulario.addEventListener('submit', handleSubmit);







