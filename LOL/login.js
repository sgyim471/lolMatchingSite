const names = document.querySelector(".gamer");
const id = document.querySelector('.ID');
const rank = document.querySelector('.rank');
const check = document.querySelector('.check');

function Pass() {
    location.href = "match.html";
}

function CheckRank() {
    let inrank = rank.value;
    let numrank;
    console.log(inrank[0]);
    switch (inrank[0]){
        case '언':
            numrank = '0';
            break;
        case '아':
            numrank = '1'+inrank[1];
            break;
        case '실':
            numrank = '2'+inrank[1];
            break;
        case '골':
            numrank = '3'+inrank[1];
            break;
        case '플':
            numrank = '4'+inrank[1];
            break; 
        case '다':
            numrank = '5'+inrank[1];
            break;
        case '마':
            numrank = '6';
            break;  
        case '그':
            numrank = '7';
            break; 
        case '첼':
            numrank = '8';
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