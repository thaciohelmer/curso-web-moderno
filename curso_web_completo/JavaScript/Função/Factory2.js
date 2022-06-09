function criarProduto(nome, preço, desconto) {
  return {
    nome,
    preço,
    desconto,
  };
}

console.log(criarProduto("Celular", 34.5, 10));
