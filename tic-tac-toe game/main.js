const buttonStartNewGame = document.querySelector(".new-game");
const areaBoxes = document.querySelector(".play-area-wrapper");
const winnerField = document.querySelector(".winner");
const overlay = document.querySelector(".overlay");

let step = 0;

function checkResult() {
  const boxes = document.querySelectorAll(".box");

  const winArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let i = 0; i < winArray.length; i++) {
    if (
      boxes[winArray[i][0]].innerHTML === "X" && 
      boxes[winArray[i][1]].innerHTML === "X" && 
      boxes[winArray[i][2]].innerHTML === "X"
    ) {
      winnerField.innerHTML = "Winner is X!!!";
      winnerField.classList.add("show");
      overlay.classList.add("show");
    } else if (
      boxes[winArray[i][0]].innerHTML === "O" && 
      boxes[winArray[i][1]].innerHTML === "O" && 
      boxes[winArray[i][2]].innerHTML === "O"
    ) {
      winnerField.innerHTML = "Winner is O!!!";
      winnerField.classList.add("show");
      overlay.classList.add("show");
    }
  }
}

areaBoxes.addEventListener("click", (e) => {
  step % 2 == 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "O";
  checkResult();
  step++;
});

buttonStartNewGame.addEventListener("click", () => {
  location.reload();
});