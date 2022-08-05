//CLASSES
//Uma classe possui caracteristicas e ações de qualquer objeto do cotidiano
class Endereco {
  rua;
  cep;
  numero;
  bairro;

  validaCEP() {}
}

//Outros exemplos
class Empresa {
  telefone;
  cnpj;
  dono;
  nome;
  localidade;
}

//Validador de acesso dos atributos de uma classe
class Pessoa {
  nome;
  idade;
  #cnh;
  #cpf;

  //construtor para iniciar valores assim que se instância uma classe
  constructor(nome, idade, cnh) {
    this.nome = nome;
    this.idade = idade;
    this.#cnh = cnh;
  }

  //Métodos getters para capturar o atributo privado
  get cpf() {
    return this.#cpf;
  }
  get cnh() {
    return this.#cnh;
  }

  //Métodos setters para iniciar um atributo privado
  set cpf(cepefe) {
    this.#cpf = cepefe;
  }
  set cnh(cnh) {
    this.#cnh = cnh;
  }
}
//Instância da classe Pessoa vazia
const alunoCurso = new Pessoa();
//Instância da classe Pessoa com valores iniciais atravez do constructor
const alunoSenai = new Pessoa("Fernando", 24, "123456789");

//Se remover os atributos getters ou setters isso não seria possível pois os atributos cnh e cpf são privados
alunoCurso.cnh = "wefef-243";
alunoCurso.cpf = "123456789";
console.log(alunoCurso.cpf);
console.log(alunoCurso.cnh);

//atributos publicos
alunoCurso.nome = "Jonas";
alunoCurso.idade = 12;

//===============================================================
// exemplo no dia a dia
class Funcionario {
  nome;
  idade;
  cpf;
  cargo;

  constructor(nome, idade, cpf, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.cargo = cargo;
  }
}

function enviaDados() {
  //Faço a captura dos inputs
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let cpf = document.getElementById("cpf").value;
  let cargo = document.getElementById("cargo").value;

  //Instancio a classe com esses inputs
  const funcionario = new Funcionario(nome, idade, cpf, cargo);
  console.log(funcionario); //Observe o retorno
}

//INDEXOF
let array = [
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
let array2 = [12, 13, 35, 57, 66];
// não é possível pois cada objeto possui sua propria referência
let indice = array.indexOf({ login: "ray123", senha: "kujhefadksujf" });
console.log(indice);

//CONCAT
//Junta arrays
console.log(array2.concat(array));
