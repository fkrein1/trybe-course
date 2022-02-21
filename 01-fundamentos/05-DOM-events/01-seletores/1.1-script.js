let body = document.getElementsByTagName("body")
body[0].style.background = " #e6e6e6"
body[0].style.fontFamily = "monospace"


let h1 = document.getElementsByTagName("h1")
h1[0].innerText = "Admin Tempo da Trybe"
h1[0].style.color = "#00008B" 

let section1 = document.querySelectorAll(".emergency-tasks div")
for (let div1 of section1){
  div1.style.background = "blue"
}

let section2 = document.querySelectorAll(".no-emergency-tasks div")
for (let div2 of section2){
  div2.style.background = "green"
}

let footer = document.querySelector("#footer-container")
footer.style.border = "solid 5px grey"
footer.style.background = "blue"