// Armazenando uma funçao em uma variavel

const imprimirSoma = function (a, b) {
  return a + b;
};

console.log(imprimirSoma(3, 8));

//Armazenando uma funçao arrow em uma variavel

const soma = (a, b) => {
  return a + b;
};

console.log(soma(14, 13));

// Retorno implícito

const subtracao = (a, b) => a - b;

console.log(subtracao(18, 5));

const imiprimir2 = (a) => console.log(a);

imiprimir2("Legal !!!");
