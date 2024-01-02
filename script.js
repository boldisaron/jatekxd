let userSelection = null;
let cpuRoll = null;
let imgNum = null;
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
        }
    }, 3000);

}
    

