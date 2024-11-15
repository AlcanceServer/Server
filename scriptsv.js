if (sessionStorage.getItem("Success") !== "true") {
    window.open("index.html","_self");
}

document.getElementById("welcome_user").innerText = sessionStorage.getItem("Utilizador");
