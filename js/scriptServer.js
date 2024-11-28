if (sessionStorage.getItem("Success") !== "true") {
    window.open("index.html","_self");
}

var navBar = document.getElementById("nav_bar")
var burguer_nav = document.getElementById("burguer_nav")

document.getElementById("welcome_user").innerText = sessionStorage.getItem("Utilizador");

function setAccentColor(color) {
    document.documentElement.style.setProperty('--accent-color', color);
}

function call_menu(n) {
    const actions = navBar.querySelectorAll("p");
    if (n >= 49 && n <= 54 && actions[n - 49]) {
        actions[n - 49].click();
    }
}
function call_actions() {
    if(navBar.className != "nav_bar_open"){
        navBar.className = "nav_bar_open";
        document.getElementById("action_tab").style.marginLeft = "220px";
        burguer_nav.style.scale = 0;
    }
    else{
        close_nav();
    }
   
}

function close_nav(){
    navBar.className = "nav_bar_closed";
    document.getElementById("action_tab").style.marginLeft = "20px";
    burguer_nav.style.scale = 1;
}

document.getElementById("close_nav").addEventListener("click",(event)=>{
    close_nav();
})

burguer_nav.addEventListener("click",()=>{
    call_actions();
})

for(let i = 0;i<=(navBar.querySelectorAll("p").length-1);i++){
    navBar.querySelectorAll("p")[i].addEventListener("click",()=>{
        document.getElementById("action_tab").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("action_tab").innerHTML = document.querySelectorAll(".actions")[i].innerHTML;
            document.getElementById("action_tab").style.opacity = 1;
        }, 200);
    })
}


document.addEventListener("keydown",(event)=>{
    if(event.ctrlKey && event.which == 77){
        call_actions();
        return;
    }
    for(let i = 49;i<=54;i++){
        if(event.ctrlKey && event.which == i){
            event.preventDefault();
            call_menu(i);
            return;
        }
    }
})





