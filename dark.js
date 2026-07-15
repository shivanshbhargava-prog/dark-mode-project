let body = document.querySelector("body");
let button = document.querySelector("#darkModeButton");

button.addEventListener("click", function(){
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        button.innerText = "Light Mode ☀️";
    } else {
        button.innerText = "Dark Mode 🌙";
    }
})