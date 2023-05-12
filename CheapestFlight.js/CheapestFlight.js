/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const grafo = Array(n).fill(null).map(() => Array(n).fill(Infinity));
  
  
  for (const [origem, destino, preco] of flights) {
    grafo[origem][destino] = preco;
  }
  
  const fila = new BinaryHeap(([cidA, precA, paradasA], [cidB, precB, paradasB]) => {
    if (precA !== precB) {
      return precA - precB;
    } else if (paradasA !== paradasB) {
      return paradasA - paradasB;
    } else {
      return cidA - cidB;
    }
  });

  fila.insert([src, 0, k + 1]);

  while (fila.size > 0) {
    const [cidade, custo, paradas] = fila.extractRoot();

    if (cidade === dst) {
      return custo;
    }

    if (paradas === 0) {
      continue;
    }

    for (let vizinho = 0; vizinho < n; vizinho++) {
      if (graph[cidade][vizinho] !== Infinity) {
        const newcusto = custo + graph[cidade][vizinho];
        fila.insert([vizinho, newcusto, paradas - 1]);
      }
    }
  }

  return -1;
};