function calcJurosSimples(c, i, t) {
  let juros = c * i / 100 * t;
  let montante = c + juros;
  return "R$" + montante.toFixed(2);
}

console.log(calcJurosSimples(100, 10, 2));

function calcJurosComposto(c, i, t) {
  let juros = Math.pow(1 + i / 100, t);
  let montante = c * juros;
  return "R$" + montante.toFixed(2);
}

console.log(calcJurosComposto(100, 10, 2));
