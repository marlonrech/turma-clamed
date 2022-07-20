//Declarações de variáveis

//let
//variáveis locais
function exempleLet() {
  //código funciona normalmente
  let nome = "";

  if (nome == "") {
    nome = "Seu nome aqui";
  }
  console.log(nome); //Seu nome aqui

  //código com erro
  if (1 == 1) {
    let idade = "";
    idade = "Sua idade aqui";
  }
  console.log(idade); // Uncaught ReferenceError: idade is not defined
}

//const
//variáveis locais e constantes (não muda o valor)
const pi = 3.1415;
// (Código abaixo não será permitido) - Erro
pi = 1.23;

//var
//variáveis globais e não constantes (pode mudar o valor)
function exempleVar() {
  //código funciona normalmente
  var nome = "";

  if (nome == "") {
    nome = "Seu nome aqui";
  }
  console.log(nome); //Seu nome aqui

  //código com erro
  if (1 == 1) {
    var idade = "";
    idade = "Sua idade aqui";
  }
  console.log(idade); //undefined
}
