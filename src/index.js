import cipher from './cipher.js';

const nameUser= document.getElementById("userSend");
nameUser.addEventListener("click", getName);

function getName(){
    const inputName= document.getElementById("name");
    const inputPassword= document.getElementById("password");
    localStorage.setItem("username", inputName.value);
    localStorage.setItem("userpassword", inputName.value);
    inputName.innerHTML= "¡Hola, bienvenida " + inputName.value + "!"
    inputName.value=""
    inputPassword.value=""
}

const btnCoder= document.getElementById("infoCipher");
btnCoder.addEventListener("click", getEncrypt);

function getEncrypt(){
    const inputText= document.getElementById("forEncryption");
    const inputKeyCode= document.getElementById("loockCipher");
    const textEncryption= cipher.encode(Number(inputKeyCode.value), inputText.value);
    const inputAnswer= document.getElementById("codeMessage");
    inputAnswer.value= textEncryption;
}

const btnDecoder= document.getElementById("infoDecode");
btnDecoder.addEventListener("click", getDecrypt)

function getDecrypt(){
    const inpuntEncripted= document.getElementById("forDecode");
    const inputKeyDecode= document.getElementById("loockCipher2");
    const textDecripted= cipher.decode(Number(inputKeyDecode.value), inpuntEncripted.value);
    const inputAnswer2= document.getElementById("textDecode");
    inputAnswer2.value= textDecripted;
}





