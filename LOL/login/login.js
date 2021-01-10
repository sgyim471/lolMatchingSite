const names = document.querySelector(".gamer");
const id = document.querySelector('.ID');
const rank = document.querySelector('.rank');
const check = document.querySelector('.check');

function Pass() {
    location.href = "../match/match.html";
}

function CheckRank() {
    let inrank = rank.value;
    let numrank;
    console.log(inrank[0]);
    switch (inrank[0]){
        case '언':
            numrank = '1';
            break;
        case '아':
            numrank = 6-inrank[1];
            break;
        case '브':
            numrank = 10-inrank[1];
            break;    
        case '실':
            numrank = 19-inrank[1]*2;
            break;
        case '골':
            numrank = 32-inrank[1]*3;
            break;
        case '플':
            numrank = 49-inrank[1]*4;
            break; 
    }
    window.localStorage.setItem("rank", numrank);
}

function first() {
    const inname = names.value;
    window.localStorage.setItem("name",inname);

    const inid = id.value;
    window.localStorage.setItem("id",inid);

    CheckRank();

    Pass();
}

function init(){
    check.addEventListener("click",first);
}

init();