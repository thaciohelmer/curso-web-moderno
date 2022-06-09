//Escopo criado quando uma função é declarada
//Permite a funçao acessar e manipular as variaveis externas da função

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
