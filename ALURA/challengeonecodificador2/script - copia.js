const varinputtexto = document.querySelector(".inputtexto");
const varmensaje = document.querySelector(".inputtexto2");

function botonencriptar () {
const textencriptado = Encriptar (varinputtexto.value);
varmensaje.value =  textencriptado;
}

function Encriptar (procesoencriptar){
let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],,["u","ufat"]]
procesoencriptar = procesoencriptar.toLowerCase();
for (let i=0; i< matriz.length; i++) {
    if (procesoencriptar.includes(matriz[i][0])){
        procesoencriptar=procesoencriptar.replaceAll(matriz[i][0], matriz[i][1])
    }
}
return procesoencriptar;
}