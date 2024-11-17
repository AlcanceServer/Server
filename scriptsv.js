if (sessionStorage.getItem("Success") !== "true") {
    window.open("index.html","_self");
}

var navBar = document.getElementById("nav_bar")
var burguer_nav = document.getElementById("burguer_nav")

document.getElementById("welcome_user").innerText = sessionStorage.getItem("Utilizador");

document.getElementById("close_nav").addEventListener("click",(event)=>{
    navBar.className = "nav_bar_closed";
    document.getElementById("action_tab").style.marginLeft = "20px";
    burguer_nav.style.scale = 1;
})

burguer_nav.addEventListener("click",()=>{
    navBar.className = "nav_bar_open";
    document.getElementById("action_tab").style.marginLeft = "220px";
    burguer_nav.style.scale = 0;
})

for(let i = 0;i<=(navBar.querySelectorAll("p").length-1);i++){
    navBar.querySelectorAll("p")[i].addEventListener("click",()=>{
        document.getElementById("action_tab").innerHTML = document.querySelectorAll(".actions")[i].innerHTML;
    })
}