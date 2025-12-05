let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbutn = document.querySelector("#newgame");
let turno = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turno = true;
    enablebox();
    msgcontainer.classList.add("hide");
}

boxes.forEach ((box)=>{
    box.addEventListener("click", () =>{
        if(turno === true){
            box.innerText = "0";
            turno = false;
        }else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const newgame = () =>{
    turno = true;
    enablebox();
    msgcontainer.classList.add("hide");
};

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
            }
        }
    }
    let count = 0;
    for(let box of boxes){
        if(box.innerText !== ""){
            count++;
        }
    }

    if(count === 9){
        msg.innerText = "Match Draw ! Play again";
        msgcontainer.classList.remove("hide");
        disablebox();
    }
};


resetbutton.addEventListener("click",resetgame);
newbutn.addEventListener("click",newgame);
