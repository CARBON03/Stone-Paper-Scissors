
let score =JSON.parse(localStorage.getItem('score')) || {
  wins : 0 ,
  losses : 0,
  ties : 0,
};


updateScoreElement()


/* if(!score){
 score = {
  wins : 0 ,
  losses : 0,
  ties : 0,
};
} */

let computerMove;

function pickComputerMove(){
const randomNumber = Math.random();

if(randomNumber >= 0  && randomNumber < 1/3 ){
  computerMove = 'Stone' ;
}else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
  computerMove = 'Paper';
}else if (randomNumber >= 2/3 && randomNumber < 1){
  computerMove = 'Scissors';
}

}

function playGame(playerMove){
let Result = '';

pickComputerMove()

if(playerMove === 'Scissors'){
if (computerMove === 'Stone'){
  Result = 'You Lose!!';
}else if(computerMove === 'Paper'){
  Result = 'You Win!!';
}else if(computerMove === 'Scissors'){
  Result ='Tie!!';
}
} else if(playerMove === 'Stone'){
if (computerMove === 'Stone'){
        Result = 'Tie!!';
      }else if(computerMove === 'Paper'){
        Result = 'You Lose!!';
      }else if(computerMove === 'Scissors'){
        Result ='You Win!!';
      }
}else if(playerMove === 'Paper'){
if (computerMove === 'Stone'){
        Result = 'You Win!!';
      }else if(computerMove === 'Paper'){
        Result = 'Tie!!';
      }else if(computerMove === 'Scissors'){
        Result ='You Lose!!';
      }
}

if(Result === 'You Win!!'){
score.wins += 1 ;
}else if(Result === 'Tie!!'){
score.ties += 1 ;
}else if(Result === 'You Lose!!'){
score.losses += 1 ;
}

localStorage.setItem('score',JSON.stringify(score));


updateScoreElement()

  document.querySelector('.js-moves').innerHTML = `You  <img class='move-icon' src="./Media/${playerMove}-emoji.png"> <img class='move-icon' src="./Media/${computerMove}-emoji.png">Computer`;

document.querySelector('.js-Result').innerText = Result;
}   


function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}.`;
}

function clearTheGame () {
  document.querySelector('.js-moves').innerHTML = '';
  document.querySelector('.js-Result').innerHTML = '';
}
