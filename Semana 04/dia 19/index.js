//OBJETO
let user = {
  login: "rayo19",
  senha: "qaweftewfeqaf",
};

console.log("Entries: ", Object.entries(user));
console.log("chaves: ", Object.keys(user));
//Para acessar um valor de uma determindada propriedade (use o .)
console.log("Login: ", user.login);

//ATENÇÃO === Caso const
const usuario = {
  nome: "Ro dafgsedrfg***;wb so n",
  idade: 12,
};

//Aqui acesso a propriedade nome e mudo seu valor, o que é permitido
usuario.nome = "Rayane";
//Isso não pode pois estou mudando toda a variável usuario, mas ela é const
usuario = {
  nome: "Raquel",
  idade: 12,
};

// Observe que o objeto aluno possui vários formatos de valores em suas chaves
// Isso é totalmente permitido em um objeto.
let aluno = {
  nome: "",
  matricula: "",
  notas: [10, 2, 4, 6],
  padding: {
    top: 12,
    bottom: 32,
    left: 12,
    rigth: 90,
  },
};
//acesso a um item de array dentro de um objeto
let arrayNotas = aluno.notas; // [10,2,4,6]
console.log(arrayNotas[3]); // 6
//acesso a um item de um objeto dentro de um objeto
console.log(aluno.padding.bottom); //32

//Exemplo de resposta do slide 8
const gabinete = {
  cor: "preto",
  quantidadeCooler: 2,
  placaMae: "b450m",
  placaDeVideo: "AMD5700",
  processador: "ryzen 3600",
};

//EXTRAS
//Como criar uma propriedade nova no meu objeto
gabinete.marca = "Cooler Master";
//Como deletar uma propriedade no meu objeto
delete gabinete.placaDeVideo;
console.log(gabinete);

//=======================================================
// OBJETO - Sua declaração usa { }
let carro = {
  cor: "rosa",
  marca: "Ferrari",
  kilometragem: 2000,
};
//formar de acesso
console.log(carro.kilometragem); //2000

// ARRAY - Sua declaração usa [ ]
let notas = [10, 4, 6, 8, 9];
//formar de acesso
console.log(notas[0]); //10

//=======================================================
//CLASSES
var rua = "Rua alfredo vinicius";
class Endereco {
  rua = "Rua alberto";
  cep;
  numero;
  bairro;

  validaCEP() {
    console.log(this.cep); //undefined
  }
}
//variavel rua criada na linha 76
rua = "Rua Carlos";

//atributo rua da classe Endereco
let casa = new Endereco();

console.log(casa.rua); // Rua alberto
casa.rua = "Cavaleiro";
console.log(casa.rua); // Cavaleiro

casa.validaCEP(); // acessa o método da classe Endereco na linha 83

// O conceito de classe serve para fazer agrupamentos de
// caracteristicas ou comportamentos de um objeto
class Funcionario {
  nome;
  idade;
  cpf;
  cargo;
  localidade = new Endereco();
}

class Empresa {
  telefone;
  cnpj;
  dono = new Funcionario();
  nome;
  localidade = new Endereco();
}

//=====================================================
class Jogo {
  nome;
  categoria;
  anoDeLancamento;
  tamanho;
}
// Não é obrigatório inicializar todos os seus atributos
const game = new Jogo();
console.log("Antes ", game);

game.nome = "Valorant";
game.categoria = "FPS";
game.anoDeLancamento = 2020;
game.tamanho = "9GB";

console.log("Depois ", game);
