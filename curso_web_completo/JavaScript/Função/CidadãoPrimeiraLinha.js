// Forma Literal
function fun1() {}

//Armazenar em uma variável
const fun2 = function () {};

//Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
];

//Armazenar como atributo de um objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

//Passar como parametro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

//Pode retornar / conter uma função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(2);
const cincoMais = soma(3, 2);
cincoMais(4);
