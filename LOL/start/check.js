const button = document.querySelector(".button");

function init() {
    const check = window.localStorage.getItem("name");
    if(check === null)
    {
        location.href = "../login/login.html";
    }
    else{
        location.href = "../match/match.html";
    }
}

button.addEventListener("click", init);