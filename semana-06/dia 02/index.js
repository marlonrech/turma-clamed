//Funções assíncronas
//Observe a ordem de impressão dos consoles
assyncFunction = () => {
  console.log("Olá");

  //Veja que para imprimir o console da linha 10 ele não espera os 5s do setTimeout
  setTimeout(() => {
    console.log("Tudo bem?");
  }, 5000);

  console.log("Sim tudo bem ^-^");
};
assyncFunction();

//Promisses
const promessa = new Promise((resolve, reject) => {
  //resolve = Função de callback para sucessos (Esta sempre ligado ao then)
  //reject = Função de callback para erros (Esta sempre ligado ao catch)
  let valor = 30;
  if (valor > 20) {
    resolve("Sucesso o número é maior que 20");
  } else {
    reject("Opa deu erro!");
  }
});
promessa
  .then((retorno) => {
    console.log(retorno); //Output - "Sucesso o número é maior que 20"
  })
  .catch((err) => {
    console.error(err); //Output - "Opa deu erro!"
  });

//Exemplos de promisses
function validaCep() {
  let cep = "1234567890";
  const p = new Promise((resolve, reject) => {
    console.log(cep.length);
    if (cep.length == 9) {
      resolve("Cep validado com sucesso");
    } else {
      reject("O cep informado esta inválido");
    }
  });
  p.then((resolve) => {
    console.log(resolve);
  }).catch((err) => {
    console.error(err);
  });

  //Resto do código
}
validaCep();

const promessaExemple = new Promise((resolve, reject) => {
  //Observe quando o nome do arquivo é correto e quando não é
  //(para forçar o erro troque o nome do arquivo para ./fil.json)
  fetch("./file.json")
    .then((response) => {
      resolve(response.json());
    })
    .catch((err) => {
      reject(err);
    });
});
promessa
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.error(err);
  });

// //Async await
function validade(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "rayane123" && password === "123456") {
        resolve("success");
      } else {
        reject("failed");
      }
    }, 5000);
  });
}

async function login() {
  let username = "rayane123",
    password = "123456";
  //aguarde a chamada de validade terminar para depois prosseguir o código
  //teste a mesma chamada sem a declaração do async e await na linha 87 e 93
  //Mesmo com a senha e password tanto certo
  let validateResults = await validade(username, password);
  console.log(validateResults);

  if (validateResults == "success") {
    console.log("Logado");
    // Resto do código aqui
  } else {
    console.error("Usuario ou senha incorreta");
  }
}
login();
