function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

global.preco = 20;
global.desc + 0.1;
console.log(getPreco()); // Direto
console.log(produto.getPreco()); // A partir de um objeto

const carro = { preco: 49990, desc: 0.2 };

console.log(getPreco.call(carro)); // A paritr de um objto
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, "$"));
