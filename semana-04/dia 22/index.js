//Exercício 08 da lista
class Serie {
  nome;
  anolancamento;
  qttTemporada;

  constructor(nome, anolancamento, qttTemporada) {
    this.nome = nome;
    this.anolancamento = anolancamento;
    this.qttTemporada = qttTemporada;
  }
}

let anoMaisAntiga, nomeAntigo;

//Pode criar um array com 4 posições e salvar cada classe em uma posição
//e com isso você consegue utilizar o forEach
for (let i = 0; i <= 1; i++) {
  let nome = prompt("Digite o nome da série:");
  let anolancamento = parseInt(prompt("Digite o ano de lançamento da série:"));
  let qttTemporada = parseInt(
    prompt("Digite a quantidade de temporadas da série:")
  );

  const serie = new Serie(nome, anolancamento, qttTemporada);
  if (i == 0) {
    anoMaisAntiga = serie.anolancamento;
    nomeAntigo = serie.nome;
  } else {
    if (serie.anolancamento < anoMaisAntiga) {
      anoMaisAntiga = serie.anolancamento;
      nomeAntigo = serie.nome;
    }
  }
}

let tagH1 = document.getElementById("h1");
tagH1.innerHTML += nomeAntigo;

//Exercício 04 da lista
//Meu exemplo de lista
let alunos = ["Arthur", "Silas", "Marlon", "Camila", "Gabriele", "Nicolas"];

let button = document.getElementById("button");

button.addEventListener("click", function () {
  let valor = document.getElementById("valor").value;

  //Função de exclusão
  excluirItem(valor);
});

function excluirItem(item) {
  let indice = alunos.indexOf(item);

  //So remove se achar o item
  if (indice != -1) {
    //o primeiro parâmetro é a posição que começa o range de excluisões e o segundo é a quantidade de itens
    //OBS: o item da posição indice também conta no segundo parâmetro
    alunos.splice(indice, 1);
  }
  //Imprime o array para obseravar se realmente excluiu
  console.log(alunos);
}
