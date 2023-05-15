/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {

    edges.sort((a, b) => vals[b[0]] + vals[b[1]] - vals[a[0]] - vals[a[1]]);
    
    const parent = Array(vals.length).fill().map((_, i) => i);
    const size = Array(vals.length).fill(1);
    
    let maxSum = Math.max(...vals); 
    
    for (const [u, v] of edges) {
        const pu = find(u);
        const pv = find(v);
        if (pu !== pv) {
            parent[pu] = pv;
            size[pv] += size[pu];
            
            for (let i = 0; i < vals.length; i++) {
                if (i !== u && i !== v && find(i) === pv) {
                    const sum = vals[i] + vals[u] + vals[v];
                    if (sum > maxSum) {
                        maxSum = sum;
                    }
                }
            }
            
            if (--k === 0) {
                break;
            }
        }
    }
    
    return maxSum;
    
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
};
