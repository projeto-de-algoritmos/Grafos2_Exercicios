# Nome do Exercício 2
Minimum Height Trees (Árvores de Altura Mínima)

[Link para o exercício](https://leetcode.com/problems/minimum-height-trees)

# Explicação

O exercício consiste em pegar um árvore e retornar uma lista de rótulos raiz de todas as árvores de altura mínima, em qualquer ordem de acordo com a altura encontrada.


# O que foi utilizado para resolver

Para resolver, construímos uma lista de adjacência da árvore, de acordo com o que é fornecido de arestas, guardando o nó e quantas arestas estão conectadas a ele. Depois, utilizamos a fila de acordo com o grau e as folhas vão sendo processadas até restar um ou dois nós que são as raízes e são retornados. Para fazer o processamento, utilizamos o algoritmo de Kruskal.

