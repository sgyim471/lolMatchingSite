const button = document.querySelector(".button");

function init() {
    const check = window.localStorage.getItem("name");
    if(check === null)
    {
        location.href = "login.html";
    }
    else{
        location.href = "match.html";
    }
}

button.addEventListener("click", init);