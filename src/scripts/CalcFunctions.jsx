export function calcTotal(trades) {
  //   console.log(`Calculando o total de negociações : ${negociacoes} valor : ${negociacoes.valor} quantidade: ${negociacoes.quantidade}`);
  return trades
    .reduce((total, n) => total + n.priceTrade * n.amountTrade, 0)
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
}
