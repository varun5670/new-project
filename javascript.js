let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true;
let count = 0;

const winpatterns = [
    [0, 1, 2,],
    [0, 3, 6,],
    [0, 4, 8,],
    [3, 4, 5,],
    [6, 7, 8,],
    [1, 4, 7,],
    [2, 5, 8,],
    [2, 4, 6,],
];

const resetgame = () =>{
    turn0 = true;
    count=0;
    enablebox();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        if( turn0){
            box.innerText ="X"
            box.style.color = "#ff0000";
            turn0 = false;
        } else{
            box.innerText ="O"
             box.style.color = "blue";
            turn0 = true;
        }
        
        box.disabled = true;
        count++;

       let iswinner=checkwinner();
       if (count ===9 && !iswinner){
        gameDraw();
       }
    })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const disablebox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWiner =(winner)=>{
  msg.innerText= `Congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkwinner = () =>{
    for (let peturn of winpatterns){
        let po1=boxes[peturn[0]].innerText;
        let po2=boxes[peturn[1]].innerText;
        let po3=boxes[peturn[2]].innerText;

        if( po1 != "" && po2 != "" && po3 != ""){
            if( po1 === po2 && po2 === po3){
                console.log("winner",po1)
                showWiner(po1);
                return true;
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)