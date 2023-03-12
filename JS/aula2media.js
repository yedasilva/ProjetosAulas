var elem1 = document.getElementById("num");
var elem2 = document.getElementById("resultado");
var botaoAdd = document.getElementById("btnAdd");
var botaoMedia = document.getElementById("btnMed")
var total = 0;
var interacao = 0;
var media = 0;


function SomaFatores(){   

    var num = elem1.value;
   
    var valor = parseInt(num);    

    total = total + valor;  
    interacao++;    

}

function Media(){     
    
    media = total/interacao;

    elem2.value = media;
}