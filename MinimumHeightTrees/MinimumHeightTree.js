/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; 
  
    const grafo = new Array(n).fill(0).map(() => []);
    const grau = new Array(n).fill(0);
  
    for (const [a, b] of edges) {
      grafo[a].push(b);
      grafo[b].push(a);
      grau[a]++;
      grau[b]++;
    }
  
    const folhas = [];
    for (let i = 0; i < n; i++) {
      if (grau[i] === 1) folhas.push(i);
    }
  
    while (n > 2) {
      const tamFolhas = folhas.length;
      n -= tamFolhas;
  
      for (let i = 0; i < tamFolhas; i++) {
        const leaf = folhas.shift();
        grau[leaf]--;
  
        for (const vizinhos of grafo[leaf]) {
          grau[vizinhos]--;
          if (grau[vizinhos] === 1) {
            folhas.push(vizinhos);
          }
        }
      }
    }
  
    return folhas; 
  };
  
  function main() {
    const n = 4;
    const edges = [[1,0],[1,2],[1,3]];
    const result = findMinHeightTrees(n, edges);
    console.log(result);
  }
  
  main();
  