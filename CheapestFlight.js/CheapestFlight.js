/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

const BinaryHeap = require('./heap');

var findCheapestPrice = function(n, flights, src, dst, k) {
  const grafo = Array(n).fill(null).map(() => Array(n).fill(Infinity));

  for (const [from, to, price] of flights) {
    grafo[from][to] = price;
  }

  const fila = new BinaryHeap(([cidA, custoA, paradasA], [cidB, custoB, paradasB]) => {
    if (custoA !== custoB) {
      return custoA - custoB;
    } else if (paradasA !== paradasB) {
      return paradasA - paradasB;
    } else {
      return cidA - cidB;
    }
  });

  fila.insert([src, 0, k + 1]);

  const memo = new Array(n).fill(null).map(() => Array(k + 2).fill(Infinity));
  memo[src][0] = 0;

  while (fila.size > 0) {
    const [cidade, custo, paradas] = fila.extractRoot();

    if (cidade === dst) {
      return custo;
    }

    if (paradas === 0 || custo > memo[cidade][paradas]) {
      continue;
    }

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (grafo[cidade][neighbor] !== Infinity) {
        const novoCusto = custo + grafo[cidade][neighbor];
        if (novoCusto < memo[neighbor][paradas - 1]) {
          memo[neighbor][paradas - 1] = novoCusto;
          fila.insert([neighbor, novoCusto, paradas - 1]);
        }
      }
    }
  }

  return -1;
};

function main() {
  const n = 4;
  const flights = [[0, 1, 100], [1, 2, 200], [0, 2, 500], [2, 3, 50], [1, 3, 100]];
  const src = 0;
  const dst = 3;
  const k = 1;

  const cheapestPrice = findCheapestPrice(n, flights, src, dst, k);
  console.log("Cheapest price:", cheapestPrice);
}

main();