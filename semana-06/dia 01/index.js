//Template Strings
//Serve para concatenar principalmente expressões com strings
let numero = 10;
let texto = `Sou o numero ${numero**2}`;
console.log(texto);

//Também é possível fazer string multilinhas com o template string
let nomeCompleto = `Rayane 
Lins Alcantara da 
Silva Neto`;

// ==============================================================================
// Exercício do slide 05
let nome = prompt("Informe seu nome:");
let sobrenome = prompt("Informe seu sobrenome:");
let idade = parseFloat(prompt("Informe sua idade:"));

let texto1 = `Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022 - idade}`;
console.log(texto1);
// ==============================================================================


// SPREAD OPERATOR
// Sem o operador spread (...)
function test(param1, ...otherParams) {
    console.log(otherParams) //Observe que ele junta todos os parâmetros recebidos na linha 29
    return `OI ${param1}, eu tenho, ${otherParams}`;
}
console.log(test("Charles", "hamster", "cachorro", "gato", "coelho"));


//Essa Function pode ser trocada pela function da linha 37 ate 43
// function somaNumeros(numero1,numero2,numero3,numero4){
//     return numero1+numero2+numero3+numero4;
// }

function somaNumeros(...valores){ //A cadeira de números passados na linha 44 irá para a variável valores
    let somatorio = 0;
    valores.map((valor)=>{
        somatorio += valor;
    });
    return somatorio;
}
console.log(somaNumeros(12,34,56,67,87,45));

// ==============================================================================
// Exercício do slide 08
let array = [12,43,56,78];
console.log(Math.max(12,43,56,78));
// ==============================================================================


//Caso de uso real
let numeros = []
//Forma de duplicação de arrays sem o spread - Feio
array.forEach((item)=>{
    numeros.push(item);
})
//Forma de duplicação de arrays com o spread - Chique, lindo, uhuuu
numeros.push(...array);


//Observe esse exemplo com ou sem o spread
let filme = "Código da vinci";
console.log(filme);
console.log(...filme);


//Outros exemplos
let lista1 = ['teste2','teste3','teste4','teste5'];
const listaUsuarios = [ 'teste1', ...lista1];
console.log(listaUsuarios); //['teste1','teste2','teste3','teste4','teste5']

