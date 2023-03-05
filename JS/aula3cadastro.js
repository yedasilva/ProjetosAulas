var el_nome = document.getElementById("nomePessoa");
var el_idade = document.getElementById("idadePessoa");
var el_email = document.getElementById("emailPessoa");
var el_observacao = document.getElementById("observacoes");

var lista = [];

function Salvar(){
    var Obj = {
        nomePes: el_nome.value,
        idadePes:el_idade.value,
        emailPes :el_email.value,
        obsPes :el_observacao.value,
    }
    lista.push(Obj); 
}

function Mostrar(){

    var todos = "";
    for(var i in lista){
        todos += "Nome: "+ lista[i].nomePes +"; \n";
    } 
    window.alert(todos);

}

function Limpar(){    
    el_nome.value = "";
    el_idade.value = "";
    el_email.value = "";
    el_observacao.value = "";
}

