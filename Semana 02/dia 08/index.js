//Resposta exercício 06
var peso = parseFloat(prompt("Digite seu peso: ")); //captura o peso pelo prompt e também faz a conversão para float
console.log(peso);
var altura = parseFloat(prompt("Digite sua altura em metros: ")); //captura a altura pelo prompt e também faz a conversão para float
console.log(altura);

var imc = peso / altura ** 2; //calculo para pegar o imc
// imc = imc.toFixed(2); //**Algo a mais** apenas para limitar o número de casas decimais em 2
console.log(imc);

//if para verificar qual mensagem irá imprimir
if (imc > 18.5 && imc < 24.99) {
  alert("PARABÉNS!! Você está no peso ideal");
} else if (imc >= 25) {
  alert("Um pouco acima do peso");
} else {
  alert("Você está abaixo do peso, procure um médico");
}

//Resposta exercício 07
var contador = 0,
  resposta,
  qttPessoas = 0;

while (contador < 4) {
  // laço para repetir a pergunta 4 vezes
  resposta = window.prompt(
    "Qual a sua classificação para a aserie stranger things?"
  ); //captura a responta do usuário
  switch (resposta) {
    case "ruim": //caso a reposta seja "ruim"
      qttPessoas++; // ele soma apenas com 1 (qttPessoas = qttPessoas + 1)
      break;
    case "bom":
      break;
    case "excelente":
      break;
    default: //**Algo a mais** caso o usuário digite qualquer outra coisa
      // ele informa essa mensagem e ainda pregunta novamente qual a classificação que irá pegar
      resposta = window.prompt(
        "Opa opção errada, apenas é permitido bom, ruim e excelente.\n Digite novamente sua avaliação"
      );
      if (resposta == "ruim") {
        // faço novamente a validação para não perder a resposta
        qttPessoas++; // ele soma apenas com 1 (qttPessoas = qttPessoas + 1)
      }
  }
  contador++; // incremento para que em algum momento a condição do while seja interrompida
}

console.log(
  "Quantidade de pessoas que classificou a serie como ruim: ",
  qttPessoas
); // imprimir a quantidade

//Resposta exercício 08
//laço que irá fazer o calculo e também já imprime no documento
for (let i = 1; i <= 10; i++) {
  let result = 5 * i; // calculo a ser feito
  console.log(result);
  document.write("<p>5 x ", i, "=", result, "</p>"); // imprime no formato requerido pela questã
}

//Resposta exercício 09
// Video explicando
// https://drive.google.com/drive/folders/1ClS3JcnkdA7eS75n1Ey-23qLyFkXHnLQ?usp=sharing

let codProduto,
  qttItens,
  produto = "",
  maiorValor = 0,
  arrayValores = [0, 0, 0, 0, 0];

while (codProduto != "6") {
  codProduto = prompt(
    "Qual a opção que você deseja? \n" +
      "(1) Hortifruti \n" +
      "(2) Laticínios \n" +
      "(3) Carnes \n" +
      "(4) Peixes \n" +
      "(5) Aves \n" +
      "(6) Fechar pedido"
  );

  if (codProduto != "6") {
    qttItens = parseInt(prompt("Informe a quantidade:"));
  }

  switch (codProduto) {
    case "1":
      arrayValores[0] += qttItens;

      if (arrayValores[0] > maiorValor) {
        maiorValor = arrayValores[0];
        produto = "Hortifruti";
      }
      break;
    case "2":
      arrayValores[1] += qttItens;
      if (arrayValores[1] > maiorValor) {
        maiorValor = arrayValores[1];
        produto = "Laticínios";
      }
      break;
    case "3":
      arrayValores[2] += qttItens;
      if (arrayValores[2] > maiorValor) {
        maiorValor = arrayValores[2];
        produto = "Carnes";
      }
      break;
    case "4":
      arrayValores[3] += qttItens;
      if (arrayValores[3] > maiorValor) {
        maiorValor = arrayValores[3];
        produto = "Peixes";
      }
      break;
    case "5":
      arrayValores[4] += qttItens;
      if (arrayValores[4] > maiorValor) {
        maiorValor = arrayValores[4];
        produto = "Aves";
      }
      break;
  }
}

console.log("Este produto possui a maior quantidade: ", produto);
