let GuessNumber = document.querySelector('input');
let btn = document.querySelector('button');
let html = document.querySelector('html');

function randomNumber() {
    Math.floor(Math.random() * 100);
}

btn.addEventListener ('click', numberRendering);

function numberRendering() {
let numberPrint = document.createElement('p');
html.appendChild(numberPrint);
numberPrint.textContent = GuessNumber.value;
console.log(GuessNumber);
let numberGuess = GuessNumber.value; 
    
}