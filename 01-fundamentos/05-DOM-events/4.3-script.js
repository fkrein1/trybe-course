
document.querySelector("#background-button").addEventListener("click", background)
document.querySelector("#color-button").addEventListener("click", color)
document.querySelector("#font-size-button").addEventListener("click", fontSize)
document.querySelector("#line-height-button").addEventListener("click", lineHeight)
document.querySelector("#font-family-button").addEventListener("click", fontFamily)

window.onload = function(){
  fontFamilyLoad()
  lineHeightLoad()
  fontSizeLoad()
  colorLoad()
  backgroundLoad()
}

function fontFamily(){
  let a = document.querySelector("#font-family").value
  document.querySelector("body").style.fontFamily = a
  localStorage.setItem("font", a)
}

function fontFamilyLoad(){
  document.querySelector("body").style.fontFamily = localStorage.getItem("font")
}

function lineHeight(){
  let a = document.querySelector("#line-height").value
  document.querySelector("body").style.lineHeight = a
  localStorage.setItem("line", a)
}

function lineHeightLoad(){
  document.querySelector("body").style.lineHeight = localStorage.getItem("line")
}

function fontSize(){
  let a = document.querySelector("#font-size").value
  document.querySelector("body").style.fontSize = a
  localStorage.setItem("fontsize", a)
}

function fontSizeLoad(){
  document.querySelector("body").style.fontSize = localStorage.getItem("fontsize")
}

function color(){
  let a = document.querySelector("#color").value
  document.querySelector("body").style.color = a
  localStorage.setItem("color", a)
}

function colorLoad(){
  document.querySelector("body").style.color = localStorage.getItem("color")
}

function background(){
  let a = document.querySelector("#background").value
  document.querySelector("body").style.background = a
  localStorage.setItem("background", a)
}

function backgroundLoad(){
  document.querySelector("body").style.background = localStorage.getItem("background")
}

