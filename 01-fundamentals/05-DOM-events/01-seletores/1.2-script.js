/* Aqui você vai modificar os elementos já existentes utilizando apenas as funções: 
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName() */

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

let p = document.getElementsByTagName("p")
p[0].innerText = "DEV ganhando em Libra, Euro ou Dólar"

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

let main = document.getElementsByClassName("main-content")
main[0].style.background = "rgb(76,164,109)"

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

let center = document.getElementsByClassName("center-content")
center[0].style.background = "white"

// 4. Crie uma função que corrija o texto da tag <h1>.

let h1 = document.getElementsByTagName("h1")
h1[0].innerText = "Exercício 5.1 - JavaScript"

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
for (let index of p){
  index.innerText = index.innerText.toUpperCase()
}

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

for (let index of p){
  console.log(index)
}
