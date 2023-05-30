const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para " ufat"`

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
let matrizCódigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
stringEncriptado = stringEncriptado.toLowerCase()


for(let i = 0; i < matrizCódigo.length; i++){
    if(stringEncriptado.includes(matrizCódigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizCódigo[i][0], matrizCódigo[i][1])
    } 
    
}
return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCódigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i = 0; i < matrizCódigo.length; i++){
        if(stringDesencriptado.includes(matrizCódigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCódigo[i][1], matrizCódigo[i][0])
        }
    }
    return stringDesencriptado

    }