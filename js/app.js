const formNameGenerator = document.getElementById('name-generator');
formNameGenerator.addEventListener('submit', loadName);

function loadName(e) {
  e.preventDefault;

  const country = document.getElementById('country');
  const countrySelected = country.options[country.selectedIndex].value;

  const gender = document.getElementById('gender');
  const genderSelected = gender.options[gender.selectedIndex].value;

  const quantity = document.getElementById('number').value;

  const apiNameGenerator = 'http://uinames.com/api/?';

  // costruction url
  let url = '';
  url += apiNameGenerator;
  
  if (countrySelected !== ''){
    url += `region=${countrySelected}&`;
  }

  if (genderSelected !== ''){
    url += `region=${genderSelected}&`;
  }

  if (quantity !== ''){
    url += `amount=${quantity}&`;
  }

  // init XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  // create template
  xhr.onload = function(){
    if(this.status === 200){
      // convert text to Json
      const names = JSON.parse(this.responseText);

      htmlTemplate = '<ul>';

      names.forEach(function(name){
        htmlTemplate += `
          <li>${name.name} </li>
        `
      })

      htmlTemplate += '</ul>';

      let result = document.getElementById('result');
      result.innerHTML = htmlTemplate;
    }
  }

  xhr.send();  
}