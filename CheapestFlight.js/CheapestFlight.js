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
  
  const fila = [[src, 0, k + 1]];
  
  while (fila.length > 0) {
    
    fila.sort((a, b) => a[1] - b[1]); 
    const [cidade, cost, paradas] = fila.shift();
    
    if (cidade === dst) {
      return cost;
    }
    
    if (paradas === 0) {
      continue;
    }
    
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (grafo[cidade][neighbor] !== Infinity) {
        const newCost = cost + grafo[cidade][neighbor];
        fila.push([neighbor, newCost, paradas - 1]);
      }
    }
  }
  
  return -1;
};