/**
 * @param {number} n
 * @param {number[][]} aresta
 * @return {number[]}
 */
var findminAlturaTrees = function(n, aresta) {
    if (n === 1) return [0];
  
   
    const grafo = new Array(n).fill(0).map(() => []);
    const altura = new Array(n).fill(0);
  
    for (const [a, b] of aresta) {
      grafo[a].push(b);
      grafo[b].push(a);
    }
  
    function pegarAltura(no, pai) {
      let altura = 0;
      for (const vizinho of grafo[no]) {
        if (vizinho !== pai) {
          altura = Math.max(altura, 1 + pegarAltura(vizinho, no));
        }
      }
      return altura;
    }
  
   //Kruskal
    while (n > 2) {
      
      for (let i = 0; i < n; i++) {
        altura[i] = pegarAltura(i, -1);
      }
  
      
      let minAltura = Infinity;
      let arestaMin = -1;
  
      for (let i = 0; i < aresta.length; i++) {
        const [a, b] = aresta[i];
        const alturaum = altura[a] + altura[b];
  
        if (alturaum < minAltura) {
          minAltura = alturaum;
          arestaMin = i;
        }
      }
  
      const [remov1, remov2] = aresta.splice(arestaMin, 1)[0];
      grafo[remov1].splice(grafo[remov1].indexOf(remov2), 1);
      grafo[remov2].splice(grafo[remov2].indexOf(remov1), 1);
  
      n--;
    }
  
    return aresta; 
  };
  