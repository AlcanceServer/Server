var entradas = [/*Nomes de Utilizador*/["Agata", "Carlos"], /*Palavras-Passe*/["1234Aga", "1234Car"]];

var nome = document.getElementById("nome"); //Campo Nome
var pass = document.getElementById("pass"); //Campo Palavra-Passe
var btnEntrar = document.getElementById("btn_entrar"); // Botão

var ErrorMSG = document.getElementById("error_msg");

// Resetar o botão de login ao clicar nos campos de entrada
document.addEventListener("click", (event) => {
    if(event.target == nome || event.target == pass){
        btnEntrar.className = "before_login";
        btnEntrar.value = 'Entrar';
        ErrorMSG.className = "mensagem_err";
    }
});

// Função que verifica se as entradas estão corretas
btnEntrar.addEventListener("click", () => {
    let foundUser = false;
    let foundPass = false;

    for (let i = 0; i < entradas[0].length; i++) {
        if (nome.value === entradas[0][i]) {
            foundUser = true; // Nome de utilizador encontrado

            if (pass.value === entradas[1][i]) {
                foundPass = true;
                // Login bem-sucedido
                btnEntrar.className = "after_login";
                btnEntrar.value = '✔';

                setTimeout(() => {
                    window.open("server.html", "_self");
                }, 1000);

                return; // Interrompe a função ao fazer login
            }
        }
    }
    if(!foundUser){
        ErrorMSG.innerText = "Utilizador Inválido!"; // Mensagem de erro caso o utilizador seja inválido
        ErrorMSG.className = "mensagem_err_ativa";
    }
    else if(!foundPass){
        ErrorMSG.innerText = "Palavra-Passe Inválida!"; // Mensagem de erro a palavra-passe seja inválida
        ErrorMSG.className = "mensagem_err_ativa";
    }
    

    // Se o nome de utilizador ou a palavra-passe estiverem incorretos
    if (!foundUser || !foundPass) {
        btnEntrar.className = "error_login";
        btnEntrar.value = '✖';
        console.log("Login efetuado com erro!");
    }
});
