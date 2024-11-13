var entradas

async function decryptFile() {
    // Retrieve encrypted content, key, and iv from input fields
    const encryptedBase64 = 'tQYHe6D5pLbMjwDznBfG56DT/yh4Td44fLtg3egJ9jtJcm/m8PXYxQe7bNtpida32jWoMpX0LvzusiuB';
    const keyBase64 = 'O2ZYjhUsmZAL3NfXe8Dg0OXc+SYlawu8s8365Tc7nws=';
    const ivBase64 = 'XEyXn6tXhzJz6tXP';

    // Convert Base64 to Uint8Array
    const encryptedData = new Uint8Array(atob(encryptedBase64).split('').map(char => char.charCodeAt(0)));
    const keyData = new Uint8Array(atob(keyBase64).split('').map(char => char.charCodeAt(0)));
    const ivData = new Uint8Array(atob(ivBase64).split('').map(char => char.charCodeAt(0)));

    // Import the key from Base64
    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "AES-GCM" },
      true,
      ["decrypt"]
    );

    // Decrypt the data using AES-GCM
    try {
      const decryptedData = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: ivData },
        key,
        encryptedData
      );

      const decryptedText = new TextDecoder().decode(decryptedData);
      entradas = JSON.parse(decryptedText)

    }catch(error){
        console.log("ERRO")
    }
  }

  decryptFile()

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

document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("pass");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Toggle the eye icon's open/closed state
    this.classList.toggle("eyeClosed");
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
                sessionStorage.setItem("Utilizador", nome.value);
                sessionStorage.setItem("Success", "true");
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
