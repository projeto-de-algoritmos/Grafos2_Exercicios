# Nome do Exercício 
2497. Maximum Star Sum of a Graph

[Link para o exercício](https://leetcode.com/problems/maximum-star-sum-of-a-graph/)

# Explicação

Existe um grafo não direcionado consistindo de n nós numerados de 0 a n-1. Você recebe um array de inteiros com índice começando em 0 chamado "vals" com comprimento n, onde vals[i] denota o valor do i-ésimo nó.

# O que foi utilizado para resolver

O algoritmo usado no código é uma implementação do algoritmo de Kruskal para encontrar a árvore geradora mínima de um grafo não direcionado ponderado, com uma pequena modificação para encontrar o caminho com a maior soma de valores de nós ao longo da árvore gerada. O algoritmo de Kruskal é eficiente em encontrar uma árvore geradora mínima em um grafo conectado, e é implementado aqui usando uma estrutura de dados Union-Find para verificar a conectividade dos vértices e evitar a formação de ciclos na árvore gerada.