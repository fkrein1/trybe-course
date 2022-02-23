const btnSubmit = document.querySelector('#btn-submit');
const date = document.querySelector('#date');

var picker = new Pikaday({ field: document.getElementById('datepicker') });

// function prevent(event) {
//   event.preventDefault();
// }

// btnSubmit.addEventListener("click", prevent)