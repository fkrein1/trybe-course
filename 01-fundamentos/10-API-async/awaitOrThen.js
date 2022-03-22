const fetch = require('node-fetch');

// usando await + async
const fetchJoke2 = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const apiReturn = await fetch(url)
    const joke = await apiReturn.json()
    console.log(joke.value);
  } 
  catch(error) {
    console.log(`Algo deu errado :( \n${error}`)
  }
};

// usando then (callback hell =/)
const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();
fetchJoke2();
