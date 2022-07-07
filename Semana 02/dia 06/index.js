//Bloco simples if
var idade = 17;
//Leitura = Se idade for maior ou igual a 18 o bloco do if será executado
if (idade >= 18) {
  console.log("É maior de idade");
}

//exercicio slide 12
var media = 10;
if(media >= 7){
   console.log("Parabéns você tirou a média mínima, não esqueça de continuar estudando :)");
}

//Bloco composto if - else
var idade = 20;
if (idade >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}


//Bloco aninhado if... else if... else if... else
var idade = 30;
//Se a primeira não passar ele cai na segunda validação
if (idade === 18) {
  console.log("Acabou de ser maior idade");
} else if (idade > 18) {
  console.log("É maior de idade");
} else if (idade == 24) {
  console.log("É maior de idade");
} else if (idade == 89) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}
//Em ultimo caso, se não cair em nenhuma condição do if, 
//ele automaticamente cai no else
