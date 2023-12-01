let user_selection = null;
let cpuRoll = null;

document.getElementById("rock").addEventListener("click", function(){
    user_selection = 1;
    cpuRoll = cpuSelection();
});
document.getElementById("paper").addEventListener("click", function(){
    user_selection = 2;
    cpuRoll = cpuSelection();
});
document.getElementById("scissors").addEventListener("click", function(){
    user_selection = 3;
    cpuRoll = cpuSelection();
});

function cpuSelection(){
    let cpuRoll = Math.floor(Math.random() * 3) + 1;
    return cpuRoll;
}