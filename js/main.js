let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("rst-btn");
let newgamebtn = document.getElementById("new-btn");
let xresultbox = document.getElementById("xresult");
let oresult = document.getElementById("oresult");
let o_num = document.getElementById("o-num");
let x_num = document.getElementById("x-num");
let message = document.getElementById("message");
let turnX = true; //PLayer X and Player O
let count = 0; //To Find Game Draw
let X_count = 0;
let O_count = 0;

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX && !box.innerText){
            box.innerText = "X";
            turnX = false;
        }else if(!turnX && !box.innerText){
            box.innerText = "O";
            turnX = true;
        }
        let iswinner = checkWinner();
        count++;
        if(count === 9 && !iswinner){
            gameDraw();
        } 
    });
});

//GameDraw
let gameDraw = () => {
    message.innerText = "Game Was Draw";
    disablebtns();
}

//Disable Buttons
let disablebtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

//Enable Buttons
let enablebuttons = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

//Reset Game and New Game
let resetgame = () => {
    for(let box of boxes){
        box.innerText = "";
    }
    turnO = true;
    count = 0;
    X_count = 0;
    x_num.innerHTML =  X_count
    O_count = 0;
    o_num.innerHTML = O_count;
    message.innerHTML = "";
    enablebuttons();
}

//New Game
let newgame = () => {
    for(let box of boxes){
        box.innerText = "";
    }
    message.innerHTML = "";
    turnO = true;
    count = 0;
    enablebuttons();
}

//Show Winner
let showWinner = (winner) => {
    if(winner === 'X'){
        X_count++;
        x_num.innerHTML = X_count;
    } else if(winner === 'O'){
        O_count++;
        o_num.innerHTML = O_count;
    }

    message.innerText = `Congratulations Winner is ${winner}`;
    disablebtns();
}

//Check Winner
const checkWinner = () => {
    for(pettern of patterns){
        let value1 = boxes[pettern[0]].innerText;
        let value2 = boxes[pettern[1]].innerText;
        let value3 = boxes[pettern[2]].innerText;
        
        if(value1 !== "" && value2 !== "" && value3 !== ""){
            if(value1 === value2 && value2 === value3){
                showWinner(value1);
                return true;
            }
        }
    }
} 

//Reset and New Buttons
resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click", newgame);