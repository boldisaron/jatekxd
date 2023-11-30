let user_selection;

document.getElementById("rock").addEventListener("click", function(){
    user_selection = 1;
});
document.getElementById("paper").addEventListener("click", function(){
    user_selection = 2;
});
document.getElementById("scissors").addEventListener("click", function(){
    user_selection = 3;
    console.log(cpuSelection);
});

function cpuSelection(){
    let cpuRoll = Math.floor(Math.random() * 4) + 1;
    return cpuRoll;
}