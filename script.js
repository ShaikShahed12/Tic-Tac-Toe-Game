let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerO , playerX

let winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



boxes.forEach((sox) => {
  //////////document.querySelectorAll uphar use akre islye forEach yaha use karre. Direct boxes.addEventListener use nhi karakte
  sox.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO) {
      //playerO
      sox.innerText = "O";
      turnO = false;
    } else {
      //playerX
      sox.innerText = "X";
      turnO = true;
    }
    sox.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner= (winner) => {
    msg.innerText = `Congratulations, Winner is Player${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val===pos2Val && pos2Val===pos3Val) {
            // console.log(`Winner is ${pos1Val}`);
            showWinner(pos1Val);
        }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
