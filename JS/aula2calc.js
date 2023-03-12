var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var res = document.getElementById('resposta');

function Soma(){
    
    var v1 = n1.value;
    var v2 = n2.value;

    num1 = parseInt(v1);
    num2 = parseInt(v2);

    soma = num1 + num2;

    var historico = res.value;
    var result = v1 + ' + ' + v2 + ' => ' + soma;
    res.value = result;

    historico = historico + result + '\n';
    res.value = historico;

    return false;
    
};

function Subtracao(){
    
    var v1 = n1.value;
    var v2 = n2.value;

    num1 = parseInt(v1);
    num2 = parseInt(v2);

    subtracao = num1 - num2;

    var historico = res.value;
    var result = v1 + ' - ' + v2 + ' => ' + subtracao;
    res.value = result;

    historico = historico + result + '\n';
    res.value = historico;

    return false;
    
};

function Multiplicacao(){
    
    var v1 = n1.value;
    var v2 = n2.value;

    num1 = parseInt(v1);
    num2 = parseInt(v2);

    multiplicacao = num1 * num2;

    var historico = res.value;
    var result = v1 + ' x ' + v2 + ' => ' + multiplicacao;
    res.value = result;

    historico = historico + result + '\n';
    res.value = historico;

    return false;
    
};

function Divisao(){
    
    var v1 = n1.value;
    var v2 = n2.value;

    num1 = parseInt(v1);
    num2 = parseInt(v2);

    divisao = num1 / num2;

    var historico = res.value;
    var result = v1 + ' / ' + v2 + ' => ' + divisao;
    res.value = result;

    historico = historico + result + '\n';
    res.value = historico;

    return false;
    
};

function Limpar(){
    n1.value = "";
    n2.value = "";
    res.value = "";
}
