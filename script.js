let userSelection = null;
let cpuRoll = null;
let outcomes = {
    RR: "Döntetlen",
    RP: "Cpu",
    RS: "Felhasználó",
    PP: "Döntetlen",
    PR: "Felhasználó",
    PS: "Cpu",
    SS: "Döntetlen",
    SR: "Cpu",
    SP: "Felhasználó",
  };
let choices = ["R", "P", "S"];
let images = ["img/rock.svg", "img/paper.svg", "img/scissors.svg"];
const cpuImg = document.getElementById("boxImgCpu");
const userImg = document.getElementById("boxImgUser");


document.getElementById("rock").addEventListener("click", function(){
    userSelection = "R";
    Roll(userSelection);       
});
document.getElementById("paper").addEventListener("click", function(){
    userSelection = "P";
    Roll(userSelection);        
});
document.getElementById("scissors").addEventListener("click", function(){
    userSelection = "S";
    Roll(userSelection);
});

function Roll(userSelection){
    let cpuRoll = Math.floor(Math.random() * 3);
    let outcome = outcomes[userSelection + choices[cpuRoll]];
    console.log(outcome);

    cpuImg.classList.add('cpuShake');
    userImg.classList.add('userShake');

    setTimeout(function (){
        userImg.classList.remove('userShake');
        cpuImg.classList.remove('cpuShake');
        document.getElementById("resultText").textContent = outcome;
    }, 3000);

}
    

