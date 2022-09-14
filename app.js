let randomNumber = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const higOrLow = document.querySelector(".higherOrLower");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");


let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess (){
  let userGuess = Number(guessField.value);
  if(guessCount===1){
    guesses.textContent = "Previous Guesses: "
  }
  guesses.textContent+=userGuess+ ' ';
  if(userGuess===randomNumber){
    lastResult.textContent= 'Congratulations you won!';
    lastResult.style.backgroundColor = 'green';
    higOrLow.textContent = '';
    setGameOver();
  }else if(guessCount === 5){
    lastResult.textContent = '!!! GAME OVER !!!';
    higOrLow.textContent = '-';
    setGameOver();
  } else {
     lastResult.textContent = '!WRONG';
     if(userGuess<randomNumber){
      higOrLow.textContent = 'last guess was too low higher please'
     }else if(userGuess>randomNumber){
      higOrLow.textContent= "last guess was too high lower please";
     }
     lastResult.backgroundColor = 'red';
  }
  guessCount++;
  guessField.value='';
  guessField.focus();
}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
  guessField.disabled=true;
  guessSubmit.disbled=true;
  resetButton= document.createElement('button');
  resetButton.textContent = 'Play Again';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame)

}
function resetGame (){
  guessCount=1;
  
  let resetParas = document.querySelector('.resultParas p');
  for(let i = 0 ;i <resetParas.length;i++){
  resetParas[i].textContent='';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled=false;
  guessSubmit.value='';
  guessField.focus();

  randomNumber = Math.floor(Math.random()*100)+1;
}