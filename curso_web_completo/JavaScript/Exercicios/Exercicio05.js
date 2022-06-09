function dinheiro(x, y) {
  var soma = x + y;
  return 'R$ '+ soma.toString().replace(".", ",");
}

console.log(dinheiro(0.2, 0.3));
