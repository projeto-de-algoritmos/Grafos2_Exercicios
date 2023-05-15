/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
    const graph = {};
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const p = succProb[i];
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = [];
        graph[u].push([v, p]);
        graph[v].push([u, p]);
    }

    const dist = new Array(n).fill(0);
    const visited = new Array(n).fill(false);
    dist[start] = 1;

    const pq = [[start, 1]];
    while (pq.length) {
        const [u, d] = pq.shift();
        visited[u] = true;
        if (u === end) return d;

        if (!graph[u]) continue;
        for (let i = 0; i < graph[u].length; i++) {
            const [v, p] = graph[u][i];
            if (visited[v]) continue;
            const nd = dist[u] * p;
            if (nd > dist[v]) {
                dist[v] = nd;
                pq.push([v, nd]);
            }
        }
        pq.sort((a, b) => b[1] - a[1]);
    }
    return 0;
};