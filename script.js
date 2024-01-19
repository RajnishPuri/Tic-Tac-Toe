let firstInfoBox = document.querySelector(".chancewinner");
let mainGameBox = document.querySelector(".main");
let newGameBox = document.querySelector(".button");

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");

let currentChance = "X";
firstInfoBox.innerHTML = "Current Player - X";

let winnerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let val = 1;
let box1Val = false;
let box2Val = false;
let box3Val = false;
let box4Val = false;
let box5Val = false;
let box6Val = false;
let box7Val = false;
let box8Val = false;
let box9Val = false;

let winner;
let gameOver = false;

function startGame(boxValue) {
  if (gameOver == true) {
    alert("Game is Over, Please Click on New Game to Start Again:)");
  } else {
    let box = boxValue.className;
    let [, boxNumber] = [...box.split("box")];

    let element = document.querySelector(`.${box}`);

    if (val % 2 == 1) {
      currentChance = "X";
      val++;
    } else {
      currentChance = "O";
      val++;
    }
    if (boxNumber == 1) {
      if (box1Val == false) {
        element.innerHTML = currentChance;
        winnerArray[0][0] = currentChance;
        box1Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 2) {
      if (box2Val == false) {
        element.innerHTML = currentChance;
        winnerArray[0][1] = currentChance;
        box2Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 3) {
      if (box3Val == false) {
        element.innerHTML = currentChance;
        winnerArray[0][2] = currentChance;
        box3Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 4) {
      if (box4Val == false) {
        element.innerHTML = currentChance;
        winnerArray[1][0] = currentChance;
        box4Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 5) {
      if (box5Val == false) {
        element.innerHTML = currentChance;
        winnerArray[1][1] = currentChance;
        box5Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 6) {
      if (box6Val == false) {
        element.innerHTML = currentChance;
        winnerArray[1][2] = currentChance;
        box6Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 7) {
      if (box7Val == false) {
        element.innerHTML = currentChance;
        winnerArray[2][0] = currentChance;
        box7Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 8) {
      if (box8Val == false) {
        element.innerHTML = currentChance;
        winnerArray[2][1] = currentChance;
        box8Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }
    if (boxNumber == 9) {
      if (box9Val == false) {
        element.innerHTML = currentChance;
        winnerArray[2][2] = currentChance;
        box9Val = true;
      } else {
        alert("Can Not Update Previous Value:)");
      }
    }

    checkWinner();
    function checkWinner() {
      if (
        (winnerArray[0][0] === winnerArray[0][1] &&
          winnerArray[0][0] === winnerArray[0][2] &&
          winnerArray[0][1] === winnerArray[0][2]) ||
        (winnerArray[0][0] === winnerArray[1][0] &&
          winnerArray[1][0] === winnerArray[2][0] &&
          winnerArray[2][0] === winnerArray[0][0]) ||
        (winnerArray[0][0] === winnerArray[1][1] &&
          winnerArray[1][1] === winnerArray[2][2] &&
          winnerArray[2][2] === winnerArray[0][0]) ||
        (winnerArray[0][1] === winnerArray[1][1] &&
          winnerArray[1][1] === winnerArray[2][1] &&
          winnerArray[2][1] === winnerArray[0][1]) ||
        (winnerArray[0][2] === winnerArray[1][2] &&
          winnerArray[1][2] === winnerArray[2][2] &&
          winnerArray[2][2] === winnerArray[0][2]) ||
        (winnerArray[0][2] === winnerArray[1][1] &&
          winnerArray[1][1] === winnerArray[2][0] &&
          winnerArray[2][0] === winnerArray[0][2]) || // one finshed
        (winnerArray[1][0] === winnerArray[1][1] &&
          winnerArray[1][0] === winnerArray[1][2] &&
          winnerArray[1][1] === winnerArray[1][2]) || // two fineshed
        (winnerArray[2][0] === winnerArray[2][1] &&
          winnerArray[2][1] === winnerArray[2][2] &&
          winnerArray[2][0] === winnerArray[2][2]) // third finished
      ) {
        val--;
        if (val % 2 == 0) {
          console.log("O");
          newGameBox.classList.remove("active");
          firstInfoBox.innerHTML = "WINNER - O";
          // colour
          colour();
          gameOver = true;
        } else {
          console.log("X");
          newGameBox.classList.remove("active");
          firstInfoBox.innerHTML = "WINNER - X";
          //colour
          colour();
          if (
            winnerArray[0][0] === winnerArray[0][1] &&
            winnerArray[0][0] === winnerArray[0][2] &&
            winnerArray[0][1] === winnerArray[0][2]
          ) {
            box1.classList.add("green");
            box2.classList.add("green");
            box3.classList.add("green");
          }
          gameOver = true;
        }
      } else {
        let count = val - 1;
        if (count % 2 == 0) {
          firstInfoBox.innerHTML = "Current Player - X";
        } else {
          firstInfoBox.innerHTML = "Current Player - O";
        }
      }
    }
  }
}

function refresh() {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  newGameBox.classList.add("active");
  gameOver = false;
  val = 1;
  box1Val = false;
  box2Val = false;
  box3Val = false;
  box4Val = false;
  box5Val = false;
  box6Val = false;
  box7Val = false;
  box8Val = false;
  box9Val = false;
  firstInfoBox.innerHTML = "Current Player - X";
  winnerArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  box1.classList.remove("green");
  box2.classList.remove("green");
  box3.classList.remove("green");
  box4.classList.remove("green");
  box5.classList.remove("green");
  box6.classList.remove("green");
  box7.classList.remove("green");
  box8.classList.remove("green");
  box9.classList.remove("green");
}
function colour() {
  // 1, 2, 3
  if (
    winnerArray[0][0] === winnerArray[0][1] &&
    winnerArray[0][0] === winnerArray[0][2] &&
    winnerArray[0][1] === winnerArray[0][2]
  ) {
    box1.classList.add("green");
    box2.classList.add("green");
    box3.classList.add("green");
  }
  // 1, 4, 7
  if (
    winnerArray[0][0] === winnerArray[1][0] &&
    winnerArray[1][0] === winnerArray[2][0] &&
    winnerArray[2][0] === winnerArray[0][0]
  ) {
    box1.classList.add("green");
    box4.classList.add("green");
    box7.classList.add("green");
  }
  // 1, 5, 9
  if (
    winnerArray[0][0] === winnerArray[1][1] &&
    winnerArray[1][1] === winnerArray[2][2] &&
    winnerArray[2][2] === winnerArray[0][0]
  ) {
    box1.classList.add("green");
    box5.classList.add("green");
    box9.classList.add("green");
  }
  // 2, 5, 8
  if (
    winnerArray[0][1] === winnerArray[1][1] &&
    winnerArray[1][1] === winnerArray[2][1] &&
    winnerArray[2][1] === winnerArray[0][1]
  ) {
    box2.classList.add("green");
    box5.classList.add("green");
    box8.classList.add("green");
  }

  // 3, 6, 9
  if (
    winnerArray[0][2] === winnerArray[1][2] &&
    winnerArray[1][2] === winnerArray[2][2] &&
    winnerArray[2][2] === winnerArray[0][2]
  ) {
    box3.classList.add("green");
    box6.classList.add("green");
    box9.classList.add("green");
  }

  // 3, 5, 7
  if (
    winnerArray[0][2] === winnerArray[1][1] &&
    winnerArray[1][1] === winnerArray[2][0] &&
    winnerArray[2][0] === winnerArray[0][2]
  ) {
    box3.classList.add("green");
    box5.classList.add("green");
    box7.classList.add("green");
  }

  // 4, 5, 6
  if (
    winnerArray[1][0] === winnerArray[1][1] &&
    winnerArray[1][0] === winnerArray[1][2] &&
    winnerArray[1][1] === winnerArray[1][2]
  ) {
    box4.classList.add("green");
    box5.classList.add("green");
    box6.classList.add("green");
  }

  // 7, 8, 9
  if (
    winnerArray[2][0] === winnerArray[2][1] &&
    winnerArray[2][1] === winnerArray[2][2] &&
    winnerArray[2][0] === winnerArray[2][2]
  ) {
    box7.classList.add("green");
    box8.classList.add("green");
    box9.classList.add("green");
  }
}
