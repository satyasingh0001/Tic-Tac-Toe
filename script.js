let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("div");
let msg = document.querySelector("#msg");

let turnO = true; //PlayerX, PlayerY

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
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("button clicked.");
        if (turnO) {
            box.innerText= "O";
            turnO = false;
        }else{
            box.innerText= "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
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
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
} 

// Function for show draw message

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
            }
        }
    }
};   

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);