// Definir uma classe Pessoa
class Pessoa {
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e meu email é ${this.email} .`);
      }
  
  }
  
  // Criar algumas instâncias da classe Pessoa
  const pessoa1 = new Pessoa("João", 30, "joao@gmail.com");
  const pessoa2 = new Pessoa("Maria", 25, "maria@gmail.com");
  const pessoa3 = new Pessoa("Josefa", 23, "josefa@gmail.com");

  var lista = [pessoa1,pessoa2];
  lista.push(pessoa3);

  for (var item of lista){
    item.saudacao();
  }
  
  // Criar um objeto JSON com as informações das pessoas
//   const pessoasJSON = {
//     "pessoa1": {
//       "nome": pessoa1.nome,
//       "idade": pessoa1.idade,
//       "email": pessoa1.email,
//     },
//     "pessoa2": {
//       "nome": pessoa2.nome,
//       "idade": pessoa2.idade,
//       "email": pessoa2.email,
//     },
//     "pessoa3": {
//       "nome": pessoa3.nome,
//       "idade": pessoa3.idade,
//       "email": pessoa3.email,
//     }
//   };

//   // Converter o objeto JSON em uma string
//   const pessoasJSONString = JSON.stringify(pessoasJSON);
  
//   // Exibir a string resultante
//   console.log(pessoasJSONString);
  
//   // Converter a string JSON de volta para um objeto JavaScript
//   const pessoasJSONObjeto = JSON.parse(pessoasJSONString);
  
//   // Criar novas instâncias da classe Pessoa com base nas informações do objeto JavaScript
//   const pessoa5 = new Pessoa(pessoasJSONObjeto.pessoa1.nome, pessoasJSONObjeto.pessoa1.idade, pessoasJSONObjeto.pessoa1.email);
//   const pessoa6 = new Pessoa(pessoasJSONObjeto.pessoa2.nome, pessoasJSONObjeto.pessoa2.idade, pessoasJSONObjeto.pessoa2.email);
//   const pessoa7 = new Pessoa(pessoasJSONObjeto.pessoa3.nome, pessoasJSONObjeto.pessoa3.idade, pessoasJSONObjeto.pessoa3.email);

//   // Usar o método de saudação das novas instâncias da classe Pessoa
//   pessoa5.saudacao();
//   pessoa6.saudacao();

  