//ForEach
//percorre um determinado array
// os parâmetros da função é, é ordem, o item atual, o indice e o array completo
let jogos = [
  {
    nome: "Valorant",
    modo: "FPS",
  },
  {
    nome: "Super Mario",
    modo: "Plataforma",
  },
  {
    nome: "CSGO",
    modo: "FPS",
  },
  {
    nome: "LOL",
    modo: "moba",
  },
  {
    nome: "Call of Duty",
    modo: "FPS",
  },
];
let arrayDeB = [];

//item = item da posição indice
//indice = indice ou o valor da rodada
jogos.forEach(function (jogo, indice) {
  //Aqui só será impressa o nome pois o item é um objeto
  document.write("<h3>Propriedade nome do item: " + jogo.nome + "</h3>");
  document.write("<h5>Índice: " + indice + "</h5>");
});

//FILTER
//Filtra o array de acordo com o que é passado no retorno do callback e o retorno será um novo array filtrado
//os parâmetros são os mesmos do forEach
const jogosComC = jogos.filter(function (jogo) {
  //retorna o que o primeiro caractere da propriedade nome
  return jogo.nome[0] == "C";
});

console.log("Array jogosComC: ", jogosComC);

//EXERCICIO SLIDE 07
let usuarios = [
  {
    nome: "Rayane",
    sobrenome: "Cristina",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Henrique",
    idade: 17,
  },
  {
    nome: "Julio",
    sobrenome: "Cesar",
    idade: 19,
  },
  {
    nome: "Camila",
    sobrenome: "Fernandes",
    idade: 18,
  },
  {
    nome: "Julia",
    sobrenome: "Fernandes",
    idade: 10,
  },
  {
    nome: "Bruno",
    sobrenome: "Albuquerque",
    idade: 31,
  },
  {
    nome: "Túlio",
    sobrenome: "Bastos",
    idade: 22,
  },
  {
    nome: "Cristiane",
    sobrenome: "Maria",
    idade: 41,
  },
];

let arrayMaiores = usuarios.filter(function (item) {
  return item.idade >= 18;
});
console.log("arrayMaiores: ", arrayMaiores);

//FIND
//Retorna o item que passe pela validação do retorno

//EXERCÍCIO SLIDE 09
let maiorQueTrinta = arrayMaiores.find(function (item) {
  return item.idade > 30;
});
console.log("maiorQueTrinta: ", maiorQueTrinta);
document.write(
  "<h1>" + maiorQueTrinta.nome + " " + maiorQueTrinta.sobrenome + "</h1>"
);

//MAP
//Executa uma ação para literalmente todos os itens de um array
let array2 = usuarios.map(function (usuario) {
  return (usuario.sobrenome = "Silva");
});
console.log(array2);

//REDUCE
//Executa uma ação para todos os itens de um array mas que irá retornar a ação junção da
//Recebe dois parâmetros, uma função para ser executada a todos os itens e um valor inicial
// os parâmetros dessa função será o retorno da rodada anterior, ou na primeira rodada será o valor inicial
// e o valor atual.

//Exercício slide 17
const array = [1, 22, 310, 40, 3, 5];

let maiorValor = array.reduce(function (valorAnterior, valorAtual) {
  if (valorAtual > valorAnterior) {
    valorAnterior = valorAtual;
  }
  return valorAnterior;
}, 0);
console.log(maiorValor);
