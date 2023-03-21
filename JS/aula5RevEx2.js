class AnimalEstimacao{
    constructor(nome, idade,cor){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
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
        console.log('Uiiiiiiii, Brhamma, refresca até pensamento');
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
    pet.idade;
}