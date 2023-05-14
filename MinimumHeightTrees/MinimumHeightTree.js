/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; 
  
    const graph = new Array(n).fill(0).map(() => []);
    const degrees = new Array(n).fill(0);
  
    for (const [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
      degrees[a]++;
      degrees[b]++;
    }
  
    // Inicializar a lista de folhas
    const leaves = [];
    for (let i = 0; i < n; i++) {
      if (degrees[i] === 1) leaves.push(i);
    }
  
    // Processar as folhas iterativamente
    while (n > 2) {
      const leavesSize = leaves.length;
      n -= leavesSize;
  
      for (let i = 0; i < leavesSize; i++) {
        const leaf = leaves.shift();
        degrees[leaf]--;
  
        for (const neighbor of graph[leaf]) {
          degrees[neighbor]--;
          if (degrees[neighbor] === 1) {
            leaves.push(neighbor);
          }
        }
      }
    }
  
    return leaves; // Raízes das MHTs
  };
  
  