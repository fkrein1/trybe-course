const API_URL = 'https://icanhazdadjoke.com/';

// V1 com await e async no windown on load
const fetchJoke1 = () => {
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json' } 
  }
  
  const joke = fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.joke)

  return joke
};

// V2 sem await e async
const fetchJoke2 = () => {
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json' } 
  }
  
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#jokeContainer2').innerText = data.joke
    })
};

window.onload = async () => {
  const joke = await fetchJoke1();
  document.querySelector('#jokeContainer').innerText = joke;
  fetchJoke2()
}
