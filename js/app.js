document.querySelector('#generar-nombre').addEventListener('submit', cargarNombre);

//chiamata a Ajax e stampare risultati
function cargarNombre(e) {
  e.preventDefault();

  //leggere le variabili
  const origin = document.getElementById('origen');
  const originSelected = origin.options[origin.selectedIndex].value;

  const gender = document.getElementById('genero');
  const genderSelected = gender.options[gender.selectedIndex].value;

  const quantity = document.getElementById('numero').value;

  console.log(quantity);

  let url = '';
  url += 'http:/uinames.com/api/?';

  // if origin true add to url
  if (originSelected !== '') {
    url += `?region=${originSelected}&`;
  }

  // if gender true add to url
  if (genderSelected !== '') {
    url += `?gender=${genderSelected}&`;
  }

  // if quantity true add to url
  if (quantity !== '') {
    url += `?amount=${quantity}&`;
  }

  // Inizializzare XMLHTTPRequest
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);

  xhr.onload(function () {
    if (this.status === 200) {
      const names = JSON.parse(this.resposteText);

      //Generare HTML
      let htmlNames = '<h2>Nomi Generati</h2>';

      htmlNames *= '<ul class="lista"> </ul>';

      names.forEach(function (name) {
        htmlNames += `
          <li></li>
        `;
      })
    }
  })

  xhr.send()
}
