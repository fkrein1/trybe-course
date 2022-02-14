function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" .


function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const friday = [4,11,18,25]
  const holiday = [24, 25, 31]
  const days = document.querySelector('#days');
  for(let list of dezDaysList){
    const dayNumber = document.createElement("li")
    dayNumber.innerHTML = list
    dayNumber.classList.add("day")
    if(holiday.includes(list)){
      dayNumber.classList.add("holiday")
    }
    if(friday.includes(list)){
      dayNumber.classList.add("friday")
    }
    days.appendChild(dayNumber)
  }
}

createDays()

// 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".


function createButton(string, id){
  let button = document.createElement("button")
  button.id = id
  button.innerText = string
  document.querySelector(".buttons-container").appendChild(button)
}
createButton("Feriados", "btn-holiday")

// 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

document.querySelector("#btn-holiday").addEventListener("click", function(){
  changeColor(".holiday", "green")
}
)

function changeColor(className, cor){
  let element = document.querySelectorAll(className)
  let elementColor = element[0].style.background
  for (let item of element){
    if(elementColor != cor){
      item.style.background = cor
    } else {item.style.background = "rgb(238,238,238)"
    }
  }
}

// 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

createButton("Sexta-feira", "btn-friday")

// 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

document.querySelector("#btn-friday").addEventListener("click", function(){
  changeColor(".friday", "blue")}) 

// 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
let allDays = document.querySelectorAll(".day")
for (let i of allDays){
  i.addEventListener("mouseover", zoomIn)
  i.addEventListener("mouseout", zoomOut)
}

function zoomIn (event){
  event.target.style.fontSize = "25px"
}

function zoomOut (event){
  event.target.style.fontSize = "20px"
}

// 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

function createTask(string){
  let task = document.createElement("span")
  task.innerText = string
  document.querySelector(".my-tasks").appendChild(task)
}

createTask("Cozinhar")

// 8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

function createSub(color){
  let sub = document.createElement("div")
  sub.className = "task"
  sub.style.background = color
  document.querySelector(".my-tasks").appendChild(sub)
}

createSub("red")
createTask("Estudar")
createSub("blue")



// 9 - Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

let taskSub = document.querySelectorAll(".task")
for (let n of taskSub){
  n.addEventListener("click", selectTask)
}

function selectTask(event){
  console.log
  if (event.target.className ==  "task"){
    event.target.className = "task-selected"
  } else {
    event.target.className = "task"
  }
}

let dayOfMonth = document.querySelectorAll(".day")
for (let m of dayOfMonth){
  m.addEventListener("click", taskColor)
}

function taskColor(event){
  let color = document.querySelectorAll(".task-selected")[0].style.background
  if(event.target.style.color == color){
    event.target.style.color = "rgb(119,119,119)"
  } else{
    event.target.style.color = color
  }
}

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

document.querySelector("#btn-add").addEventListener("click", addAppointment)
document.querySelector("#task-input").addEventListener("keypress", function(){
  if (event.key == "Enter"){
    addAppointment()  
  }
})


function addAppointment() {
  let inputAppointment = document.querySelector("#task-input").value
    if (inputAppointment.length == 0) {
      alert("Erro: compromisso vazio")
    } else{
      let appointment = document.createElement("li")
      appointment.innerText = inputAppointment
      document.querySelector(".input-container").appendChild(appointment)
      inputAppointment = " "
    }
  
} 