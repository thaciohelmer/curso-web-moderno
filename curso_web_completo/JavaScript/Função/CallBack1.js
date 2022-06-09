const fabricantes = ["Mercedes", "Audi", "BMW"];

function impirmir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(impirmir);
fabricantes.forEach(function (a) {
  console.log(a);
});
fabricantes.forEach((a) => console.log(a));
