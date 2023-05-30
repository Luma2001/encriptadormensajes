//Variables

//capturamos la informacion que el usuario ingresa al textArea de la class textoIngresado
var enterTextArea = document.querySelector(".textoIngresado");

//capturamos el texto encriptado en el textArea de la class textoEncriptado
var exitTextArea =  document.querySelector(".textoEncriptado");


//Condiciones a ser respetadas para la encriptación
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//Función Encriptar mensaje ingresado por el usuario
function encriptar(stringEncriptado){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];

        stringEncriptado = stringEncriptado.toLowerCase(); //pasa todas las letras a minúscula
       
        for(let i=0;i<matrizCodigo.length;i++){
            if(stringEncriptado.includes(matrizCodigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);    
            }    
        }

    return stringEncriptado;

}//fin function encriptar



//código para el boton encriptar que llama a la funcion encriptar
function btnEncriptar(){
    const mensajeEncriptado = encriptar(enterTextArea.value);
    if(!mensajeEncriptado){
       exitTextArea.value="Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar."
    }
    else{
    exitTextArea.value = mensajeEncriptado;
}
    enterTextArea.value ="";
    exitTextArea.style.backgroundImage = "none"; 

}



//Función Desencriptar el mensaje encriptado
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];

        stringDesencriptado = stringDesencriptado.toLowerCase();

        for(let i=0;i<matrizCodigo.length;i++){
            if(stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);    
            }    
        }

    return stringDesencriptado;

}//fin function desencriptar

//código para el boton desencriptar que llama a la funcion desencriptar
function btnDesencriptar(){
    const mensajeDesencriptado = desencriptar(enterTextArea.value);
    if(!mensajeDesencriptado){
        exitTextArea.value="Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar."
     }
     else{
    exitTextArea.value = mensajeDesencriptado;
     }
    enterTextArea.value ="";
    exitTextArea.style.backgroundImage = "none"; 
    
}

//código para copiar texto en portapapeles
function copiarTexto(){
    exitTextArea.select();
    navigator.clipboard.writeText(exitTextArea.value);

    if(!exitTextArea.value){
        exitTextArea.value="Error. No hay mensaje para copiar."
        exitTextArea.style.backgroundImage = "none";
    }
    else{
        alert("Texto Copiado")
        exitTextArea.value="";
    }


}




