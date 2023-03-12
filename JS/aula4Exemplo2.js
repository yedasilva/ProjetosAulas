
// Definir uma classe para representar um post

class Post {
    constructor(userId, id, title, body) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.body = body;
    }
  
    exibir() {
      console.log(`Post ${this.id}: ${this.title}\n${this.body}\n`);
    }
  }



  // Função assíncrona para buscar os posts do usuário 1
  async function obterPosts() {
    // const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
    const url = "https://jsonplaceholder.typicode.com/posts";
  
    try {
      // Fazer a requisição GET para a API JSONPlaceholder
      const response = await fetch(url);
  
      // Extrair os dados em formato JSON
      const datalist = await response.json();

      var posts = [];
      for( var data of datalist ){
        var post = new Post(data.userId, data.id, data.title, data.body);
        posts.push(post);
      }

      for( var p of posts ) {
        p.exibir();
      }

      // Criar um array de objetos Post com base nos dados da API
      // const posts = datalist.map(postData => new Post(postData.userId, postData.id, postData.title, postData.body));

      // Exibir os posts no console
      // posts.forEach(post => post.exibir());
    } catch (error) {
      console.error(error);
    }
  }
  