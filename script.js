let userSelection = null;
let cpuRoll = null;
let imgNum = null;
let cpuScore = 0;
let userScore = 0;
let outcomes = {
    RR: "Döntetlen",
    RP: "Cpu",
    RS: "Játékos",
    PP: "Döntetlen",
    PR: "Játékos",
    PS: "Cpu",
    SS: "Döntetlen",
    SR: "Cpu",
    SP: "Játékos",
  };
let choices = ["R", "P", "S"];
let images = ["img/rock.svg", "img/paper.svg", "img/scissors.svg"];
const cpuImg = document.getElementById("boxImgCpu");
const userImg = document.getElementById("boxImgUser");
const win = "rgba(37, 218, 1, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
const loss = "rgba(218, 1, 1, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
const defaultBoxShadow = "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"

document.getElementById("rock").addEventListener("click", function(){
    userSelection = "R";
    resetBoxShadow();
    Roll(userSelection);       
});
document.getElementById("paper").addEventListener("click", function(){
    userSelection = "P";
    resetBoxShadow();
    Roll(userSelection);        
});
document.getElementById("scissors").addEventListener("click", function(){
    userSelection = "S";
    resetBoxShadow();
    Roll(userSelection);
});

function Roll(userSelection){
    cpuImg.src = images[0];
    userImg.src = images[0];
    let cpuRoll = Math.floor(Math.random() * 3);
    switch(userSelection){
        case "R":
            imgNum = 0;
            break;
        case "P":
            imgNum = 1;
            break;
        case "S":
            imgNum = 2;
            break;
    };
    let outcome = outcomes[userSelection + choices[cpuRoll]];
    console.log(outcome);

    cpuImg.classList.add('cpuShake');
    userImg.classList.add('userShake');

    setTimeout(function (){
        userImg.classList.remove('userShake');
        cpuImg.classList.remove('cpuShake');
        cpuImg.src = images[cpuRoll];
        userImg.src = images[imgNum];
        if (outcome == "Döntetlen"){
            document.getElementById("resultText").textContent = outcome;
        }
        else{
            document.getElementById("resultText").textContent = outcome + " nyert!";
            if(outcome == "Cpu"){
                document.getElementById("SelectionBoxUser").style.boxShadow = loss;
                document.getElementById("SelectionBoxCpu").style.boxShadow = win;
                cpuScore++;
                document.getElementById("cpuScore").textContent = cpuScore;
            }
            else{
                document.getElementById("SelectionBoxUser").style.boxShadow = win;
                document.getElementById("SelectionBoxCpu").style.boxShadow = loss;
                userScore++;
                document.getElementById("userScore").textContent = userScore;
            }
        }
    }, 2500);
};

function resetBoxShadow(){
    document.getElementById("SelectionBoxUser").style.boxShadow = defaultBoxShadow;
    document.getElementById("SelectionBoxCpu").style.boxShadow = defaultBoxShadow;
}
    

