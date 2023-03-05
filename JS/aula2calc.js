function Soma(){
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var res = document.getElementById('resposta');

    var v1 = n1.value;
    var v2 = n2.value;

    num1 = parseInt(v1);
    num2 = parseInt(v2);

    soma = num1 + num2;



    var historico = res.value;
    var result = v1 + '+' + v2 + '=>' + soma;
    res.value = result;

    historico = historico + result + '\n';
    res.value = historico;

    return false;

    
};
