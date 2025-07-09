let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgMain");
let msg = document.querySelector("#msg");
let drawContainer = document.querySelector(".draw");
let drawMsg = document.querySelector("#drawMsg");

let turnO = true; //PlayerX, PlayerY
let turn=0;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Function for game reset
const resetGame = () => {
    turnO = true;
    turn = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("button clicked.");
        if (turnO) {
            box.innerText= "O";
            turnO = false;
            box.style.color = "black";
        }else{
            box.style.color = "#b0413e";
            box.innerText= "X";
            turnO = true;
        }
        box.disabled = true;
        turn ++

       // checkWinner();

        let win= checkWinner();
        if (turn === 9 && !win){
            showDraw();
        }
    })
});

// Function for disable all boxes
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

// Function for enable all boxes
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

//Function to show winner.
const showWinner = (winner) => {
    msg.innerText = `Game win by ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
} 

// Function for show draw message
const showDraw = () => {
    drawMsg.innerText = `Game Over.`;
    drawContainer.classList.remove("hide2");
    disableBoxes();
}

//function for checking winner
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val != ""){

            if(pos1val===pos2val && pos2val===pos3val){
                //console.log("winner ",pos1val);
                //alert(`winner ${pos1val}`);
                showWinner(pos1val);
                return true;
            }
        }
    }
};   

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
