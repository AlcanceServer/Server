var choice;

document.addEventListener("click",(event)=>{
    if(event.target.className == "escolha"){
        choice = event.target.id;
        console.log(choice);
    }
})