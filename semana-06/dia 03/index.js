//XMLHttpRequest

const oReq = new XMLHttpRequest(); //Primeiro passo - criar instancia da classe XMLHttpRequest

//Segundo passo - definir o método HTTP (GET) e para onde a chamada (url) irá ser feita (https://pokeapi.co/api/v2/pokemon/charizard)
oReq.open("GET", "https://pokeapi.co/api/v2/pokemon/charizard");
oReq.onload = () => {
  //Terceiro passo - o que será feito quando a chamada der sucesso
  //Para pegar o resutado vindo da api
  console.log(oReq.response);
};
oReq.responseType = "json"; //Tipo de retorno - no caso em formato json

oReq.send(); //Ultimo passo - enviar a requisição
