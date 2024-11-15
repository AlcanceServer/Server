if (sessionStorage.getItem("Success") !== "true") {
    window.open("index.html","_self");
}

var navBar = document.getElementById("nav_bar")
var burguer_nav = document.getElementById("burguer_nav")

document.getElementById("welcome_user").innerText = sessionStorage.getItem("Utilizador");

document.getElementById("close_nav").addEventListener("click",(event)=>{
    navBar.className = "nav_bar_closed";
    burguer_nav.style.opacity = 1;
    burguer_nav.style.scale = 1;
})

burguer_nav.addEventListener("click",()=>{
    navBar.className = "nav_bar_open";
    burguer_nav.style.opacity = 0;
    burguer_nav.style.scale = 0;
})
