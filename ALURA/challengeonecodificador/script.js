
 

function encriptar (){
var chars = {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'};
var texto = document.getElementById('inputtexto1').value;
    if (texto.length > 0){
        texto = texto.replace(/[aeiou]/g, m => chars[m]);
     document.getElementById("inputtexto2").value = texto;
     document.getElementById("msm1").style.display = "none";3
     document.getElementById("msm2").style.display = "none";
     document.getElementById("inputtexto1").value = "" ;
     document.getElementById("btcopiar").style.display = "";
     
 
         }
    }


    function desencriptar (){
        var charsen = {'ai':'a', 'enter':'e', 'imes':'i', 'ober':'o', 'ufat':'u'};
        var texto = document.getElementById('inputtexto1').value;
            if (texto.length > 0){
                texto = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
             document.getElementById("inputtexto2").value = texto;
            }
            }
           
            function copiar (){
              var texto2 = document.getElementById('inputtexto2').value; 
               var elemento = document.createElement('textarea');
               elemento.value=texto2
               document.body.appendChild(elemento);
               elemento.select();
               document.execCommand("copy");
               document.body.removeChild(elemento);
                }      

  
              