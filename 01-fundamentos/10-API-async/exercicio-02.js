//2. Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.


// const API_URL = 'https://api.coincap.io/v2/assets'

// const fetchCoins = () => {
//   fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       data.data.forEach(({ name, symbol, priceUsd }, index) => {
//         if (index < 10) {
//           let li = document.createElement('li')
//           let ul = document.querySelector('#coins')
//           li.innerText = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`
//           ul.appendChild(li)
//         }
//       })  
//     })
// }

// window.onload =  () => fetchCoins()

const API_URL = 'https://api.coincap.io/v2/assets'

const fetchCoins = () => {
  const coinData = fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)

  return coinData
}

const showCoins = (coinData, numberOfCoins) => {
  coinData.forEach(({ name, symbol, priceUsd, marketCapUsd }, index) => {
    if (index < numberOfCoins) {
      let div = document.createElement('div');
      let section = document.querySelector('#coins');
      div.innerHTML = `${index+1}: ${name} (${symbol})<br>Price: USD ${Number(priceUsd).toFixed(2)}<br> Market Cap: USD ${(Number(marketCapUsd)/ 1000000000).toFixed(2)} bi`;
      div.className = "coins"
      section.appendChild(div);
    }
  }) 
}

window.onload = async () => {
  const coinData = await fetchCoins();
  showCoins(coinData, 15)
}
