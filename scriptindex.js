var entradas = [/*Nomes de Utilizador*/["Agata","Carlos"],/*Palavras-Passe*/["1234Aga","1234Car"]]

var nome = document.getElementById("nome") //O valor no campo do Nome
var pass = document.getElementById("pass") //O valor no campo da Palavra-Passe


nome.addEventListener("click",(event)=>{
    document.getElementById("btn_entrar").className="before_login";
    document.getElementById("btn_entrar").value = 'Entrar';
})

//Função que verifica se as entradas estão certas ou não
document.getElementById("btn_entrar").addEventListener("click",(event) =>{
    for (let i = 0; i < entradas[0].length; i++) {
        if(nome.value == entradas[0][i]){
            console.log("Username exists! "+ entradas[0][i])
            if(pass.value == entradas[1][i]){
                document.getElementById("btn_entrar").className="after_login";
                document.getElementById("btn_entrar").value = '✔';
                console.log("Login efetuado com sucesso!");
                setTimeout(() => {
                    window.open("server.html","_self");
                }, 1000);
            }
        }
        else{
            document.getElementById("btn_entrar").className="error_login";
            document.getElementById("btn_entrar").value = '❌';
            console.log("Login efetuado com erro!");
        }
    }
})