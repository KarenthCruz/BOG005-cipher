import cipher from './cipher.js';

// botón información del usuario //
const nameUser = document.getElementById("userSend");
nameUser.addEventListener("click", getName);
// información del usuario //
function getName() {
    const inputName = document.getElementById("name");
    const inputPassword = document.getElementById("password");
    const namePrinter = document.getElementById("userName");
    localStorage.setItem("username", inputName.value);
    localStorage.setItem("userpassword", inputName.value);
    namePrinter.innerHTML = "¡Hola, " + inputName.value + " bienvenida!";
    inputName.value = "";
    inputPassword.value = "";
}
// botón información a cifrar //
const btnCoder = document.getElementById("infoCipher");
btnCoder.addEventListener("click", getEncrypt);
// input de texto a cifrar y clave, input donde se muestra el cifrado //
function getEncrypt() {
    const inputText = document.getElementById("forEncryption");
    inputText.value = inputText.value.toUpperCase();
    const inputKeyCode = document.getElementById("loockCipher");
    const textEncryption = cipher.encode(Number(inputKeyCode.value), inputText.value);
    const inputAnswer = document.getElementById("codeMessage");
    inputAnswer.value = textEncryption;
}
// botón información a descifrar //
const btnDecoder = document.getElementById("infoDecode");
btnDecoder.addEventListener("click", getDecrypt)
// input de texto a descifrar y clave, input donde se muestra el descifrado //
function getDecrypt() {
    const inputEncripted = document.getElementById("forDecode");
    inputEncripted.value = inputEncripted.value.toUpperCase();
    const inputKeyDecode = document.getElementById("loockCipher2");
    const textDecripted = cipher.decode(Number(inputKeyDecode.value), inputEncripted.value);
    const inputAnswer2 = document.getElementById("textDecode");
    inputAnswer2.value = textDecripted;
}





