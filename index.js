const fetch = require('node-fetch');  //Install: "npm install node-fetch@2"

const URL = 'https://jsonplaceholder.typicode.com/todos';

fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));