//Exercício do slide 03

//Fetch API

//Definição dos options podendo receber qual o método,
// quais os cabeçalhos, e informações sobre a requisição
const options = {
  method: "GET",
};

//ordem de parâmetros do fetch - url, options
fetch("https://pokeapi.co/api/v2/pokemon/magikarp", options)
  .then((response) => {
    return response.json(); //Para retornar a resposta da requisição em formato json use o .json()
  })
  .then((pokemon) => {
    //Aqui sim será impresso o retorno da API para a url https://pokeapi.co/api/v2/pokemon/magikarp
    console.log(pokemon);
  })
  .catch((err) => {
    console.error(err);
  });

//Exercício do slide 13

//Exercício do slide 14
