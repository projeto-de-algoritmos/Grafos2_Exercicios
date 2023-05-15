# Nome do Exercício 
1514. Path with Maximum Probability

[Link para o exercício](https://leetcode.com/problems/path-with-maximum-probability/)

# Explicação

O exercício consiste em dados dois nós start e end, encontre o caminho com a maior probabilidade de sucesso para ir de start até end e retorne a sua probabilidade de sucesso.

# O que foi utilizado para resolver

Este código é uma implementação do algoritmo de Dijkstra para encontrar o caminho mais curto em um grafo com pesos. Ele usa uma fila de prioridade para garantir que o nó com a menor distância seja escolhido em cada iteração. No entanto, em vez de manter uma fila de prioridade separada, ele classifica a fila em cada iteração. O grafo é representado como um objeto em que as chaves são os nós e os valores são matrizes de pares (vértice, peso). A função retorna a distância mais curta entre os nós de partida e chegada, calculada usando a probabilidade de sucesso fornecida para cada aresta. Se não houver caminho entre os dois nós, a função retorna 0.