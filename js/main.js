var gameContainer = document.querySelector('.game-container');
var gameField = document.querySelectorAll('.field');
var won = false;

for(var i = 0; i < gameField.length; i++) {
  gameField[i].addEventListener('click', putX);
}

for(var i = 0; i < gameField.length; i++) {
  gameField[i].addEventListener('dblclick', put0);
}

function putX(event){
    if (event.target.innerText === "") {
      if (event.ctrlKey) {
        event.target.innerText = "0";
        win(event.target.innerText);
        checkdraw();
      } else {
        event.target.innerText = "X";
        win(event.target.innerText);
        if (!won){
          checkdraw();
        }
      }
    } else {
      alert("Choose another field!");
    }
}

function put0(event){
    event.target.innerText = "0";
    win(event.target.innerText);
    if (!won){
      checkdraw();
    }
}

function checkdraw(){
  var emptyfields = 0;
  for(var i = 0; i < gameField.length; i++) {
    if (gameField[i].innerText === ""){
      emptyfields +=1;
      break;
    }
  }
  if (emptyfields === 0){
    alert("All fields are played. It's a draw!");
  }
}

function win(txt) {
  if (gameField[0].innerText === txt && gameField[1].innerText === txt && gameField[2].innerText === txt ||
    gameField[3].innerText === txt && gameField[4].innerText === txt && gameField[5].innerText === txt ||
    gameField[6].innerText === txt && gameField[7].innerText === txt && gameField[8].innerText === txt ||
    gameField[0].innerText === txt && gameField[3].innerText === txt && gameField[6].innerText === txt ||
    gameField[1].innerText === txt && gameField[4].innerText === txt && gameField[7].innerText === txt ||
    gameField[2].innerText === txt && gameField[5].innerText === txt && gameField[8].innerText === txt ||
    gameField[0].innerText === txt && gameField[4].innerText === txt && gameField[8].innerText === txt ||
    gameField[2].innerText === txt && gameField[4].innerText === txt && gameField[6].innerText === txt) {
      alert("Player " + txt + " has won!");
      won = true;
  }
}
