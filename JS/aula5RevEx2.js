var nomePet = document.getElementById('nomePet');
var idadePet = document.getElementById('idadePet');
var corPet = document.getElementById('corPet');
var listaPet = document.getElementById('listaPet');
var mediaPet = document.getElementById('mediaPet');




function Salvar(){

   
    
    class AnimalEstimacao{
        constructor(nome,idade,cor){
            this.nome = nomePet.value;
            this.idade = idadePet.value;
            this.cor = corPet.value;
        }
    
        fale(){
            // método vazio que será implementado pelas subclasses
        }
    }
    
    class Cachorro extends AnimalEstimacao{
        fale(){
            console.log('auau');
        }
    }
    
    class Gato extends AnimalEstimacao{
        fale(){
            console.log('miau');
        }
    }
    
    class Passaro extends AnimalEstimacao{
        fale(){
            console.log('piupiu');
        }
    }
    
    class Tartaruga extends AnimalEstimacao{
        fale(){
            console.log('Uiiiiiiii, Bhramma, refresca até pensamento');
        }
    }
    
    // Criando objetos das subclasses cachorro e Gato
    
    let cachorro1 = new Cachorro('Rex', 3,'Poodle');
    let gato1 = new Gato('Bola', 2, 'Branco');
    let passaro1 = new Passaro('Biru-Biru', 2, 'Cacatua');
    let tartaruga1 = new Tartaruga('Tartaruga da Bhramma', 15, 'Tartaruga da Bhramma');
    
    // Adicionando objetos em um array
    
    let pets = [cachorro1, gato1];
    pets.push(passaro1, tartaruga1);
    
    
    for (var pet of pets){
        pet.fale();
        console.log(' Animal de estimação:'+ pet.nome +' \n Idade: '+ pet.idade+'. \n Cor: ' + pet.cor);
    }  

    var Resultado =[];
    Resultado = pets;

    listaPet.value = Resultado;

}
var media = 0;
var somaIdade = 0;
var iteracao = 0;

function Media (){
    somaIdade = somaIdade + pet.idade;
    iteracao++;

    media = somaIdade/iteracao;
}