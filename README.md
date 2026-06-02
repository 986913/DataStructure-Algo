# DataStructure-Algo

1,500+ LeetCode solutions in JavaScript, organized by data structure and algorithm technique.

[![Interactive Graph](https://img.shields.io/badge/Knowledge_Graph-Interactive-58a6ff?style=flat-square)](./graph.html)

> **[→ Open Interactive Knowledge Graph](./graph.html)** — drag nodes, hover to highlight connections

---

## Overview

How data structures and algorithm techniques connect across this repo:

```mermaid
graph LR
  BT[Binary Tree] --> DFS & BFS & DP
  G[Graph]        --> DFS & BFS & UF[Union-Find] & Dijkstra
  Arr[Array]      --> TP[Two-Pointers] & PS[Prefix-Sum] & DP & Sort & Hash[Hash-Table]
  Mat[Matrix]     --> DFS & BFS & BK[Backtracking]
  SQ[Stack/Queue] --> MonoStack[Monotonic-Stack] & BFS
  LL[Linked-List] --> TP
  Heap            --> Greedy & Sort
  Trie            --> DFS & BK
  Str[String]     --> TP & DP & Hash
```

---

## Quick Navigation

**Data Structures**
[Binary Tree](#binary-tree--94-files) · [Graph](#graph--43-files) · [Stack & Queue](#stack--queue--61-files) · [Linked List](#linked-list--31-files) · [Array / Prefix Sum](#array--prefix-sum--34-files) · [Matrix](#matrix--38-files) · [Heap](#heap--19-files) · [Trie](#trie--8-files) · [String](#string--7-files)

**Algorithm Techniques**
[DFS](#dfs--113-files) · [BFS](#bfs--52-files) · [Two Pointers](#two-pointers--142-files) · [Dynamic Programming](#dynamic-programming--98-files) · [Backtracking](#backtracking--59-files) · [Greedy](#greedy--25-files) · [Sorting](#sorting--20-files) · [Hash Table](#hash-table--31-files)

**[LeetCode Index](#leetcode-index)**

---

## Data Structures

### Binary Tree · `94 files`

```mermaid
graph LR
  BT[Binary Tree] --> Traversal
  BT --> BST[BST Operations]
  BT --> LCA[Lowest Common Ancestor]
  BT --> TreeDP[Tree DP]
  Traversal --> DFS[DFS recursive/iterative]
  Traversal --> BFS[BFS level-order]
  BST --> BinarySearch[Binary Search]
  TreeDP --> DP[Dynamic Programming]
```

| Subcategory | Path |
|---|---|
| Traversal templates (recursive + iterative) | [数据结构/BinaryTree二叉树/遍历模版](./数据结构/BinaryTree二叉树/遍历模版) |
| Tree properties & queries | [数据结构/BinaryTree二叉树/二叉树的属性](./数据结构/BinaryTree二叉树/二叉树的属性) |
| Tree construction & modification | [数据结构/BinaryTree二叉树/二叉树的修改和构造](./数据结构/BinaryTree二叉树/二叉树的修改和构造) |
| BST — properties & validation | [数据结构/BinaryTree二叉树/BST(二叉搜索树)的属性](./数据结构/BinaryTree二叉树/BST(二叉搜索树)的属性) |
| BST — insertion, deletion, construction | [数据结构/BinaryTree二叉树/BST(二叉搜索树)的修改和构造](./数据结构/BinaryTree二叉树/BST(二叉搜索树)的修改和构造) |
| Lowest Common Ancestor (LCA) | [数据结构/BinaryTree二叉树/二叉树最近公共祖先问题(LCA)](./数据结构/BinaryTree二叉树/二叉树最近公共祖先问题\(LCA\)) |
| DFS problems | [算法思想/DFS/DFS in 二叉树 ](./算法思想/DFS/DFS%20in%20二叉树%20) |
| BFS problems | [算法思想/BFS/BFS 遍历 二叉树](./算法思想/BFS/BFS%20遍历%20二叉树) |

### Graph · `43 files`

```mermaid
graph LR
  G[Graph] --> DFS & BFS
  G --> UF[Union-Find]
  G --> Dijk[Dijkstra]
  G --> Topo[Topological Sort]
  G --> Bipartite[Bipartite Check]
  Topo --> DFS
  Topo --> BFS
  Dijk --> BFS
  UF --> MST[Minimum Spanning Tree]
```

| Subcategory | Path |
|---|---|
| BFS traversal | [数据结构/Graph/BFS遍历](./数据结构/Graph/BFS遍历) |
| DFS traversal | [数据结构/Graph/DFS遍历](./数据结构/Graph/DFS遍历) |
| Union-Find (Disjoint Set) | [数据结构/Graph/并查集(Union Find)](./数据结构/Graph/并查集(Union%20Find)) |
| Shortest / longest path (Dijkstra, BFS) | [数据结构/Graph/最短(长)路径](./数据结构/Graph/最短(长)路径) |
| Cycle detection + topological sort | [数据结构/Graph/环检测_topologicalSort](./数据结构/Graph/环检测_topologicalSort) |
| Bipartite graph | [数据结构/Graph/二分图](./数据结构/Graph/二分图) |
| Kruskal MST | [数据结构/Graph/Kruskal最小生成树算法](./数据结构/Graph/Kruskal最小生成树算法) |
| DFS in graph | [算法思想/DFS/DFS in 图](./算法思想/DFS/DFS%20in%20图) |
| BFS in graph | [算法思想/BFS/BFS in 图](./算法思想/BFS/BFS%20in%20图) |

### Stack & Queue · `61 files`

```mermaid
graph LR
  SQ[Stack / Queue] --> MonoStack[Monotonic Stack]
  SQ --> MonoQueue[Monotonic Queue]
  SQ --> PQ[Priority Queue]
  SQ --> BFS
  SQ --> DFS[Iterative DFS]
  MonoStack --> NextGreater[Next Greater Element]
  PQ --> Greedy
```

| Subcategory | Path |
|---|---|
| Classic stack problems | [数据结构/Stack&Queue/传统Stack题目](./数据结构/Stack&Queue/传统Stack题目) |
| Classic queue problems | [数据结构/Stack&Queue/传统Queue题目](./数据结构/Stack&Queue/传统Queue题目) |
| Monotonic stack | [数据结构/Stack&Queue/MonotonicStack_单调栈_题目](./数据结构/Stack&Queue/MonotonicStack_单调栈_题目) |
| Monotonic queue | [数据结构/Stack&Queue/MonotonicQueue_单调队列_题目](./数据结构/Stack&Queue/MonotonicQueue_单调队列_题目) |
| Priority queue (heap-based) | [数据结构/Stack&Queue/PriorityQueue_优先级队列_题目](./数据结构/Stack&Queue/PriorityQueue_优先级队列_题目) |

### Linked List · `31 files`

```mermaid
graph LR
  LL[Linked List] --> TP[Two Pointers]
  LL --> Recursion
  TP --> FastSlow[Fast & Slow Pointers]
  TP --> Reversal[In-place Reversal]
  FastSlow --> CycleDetect[Cycle Detection]
  FastSlow --> Midpoint
```

| Subcategory | Path |
|---|---|
| All linked list problems | [数据结构/LinkedList/List基础题](./数据结构/LinkedList/List基础题) |
| Two-pointer patterns on lists | [算法思想/2 Pointers/同向2Pointers](./算法思想/2%20Pointers/同向2Pointers) |

### Array / Prefix Sum · `34 files`

```mermaid
graph LR
  A[Array] --> TP[Two Pointers]
  A --> SW[Sliding Window]
  A --> BS[Binary Search]
  A --> PS[Prefix Sum]
  A --> DP[Dynamic Prog.]
  A --> Greedy
  A --> Sort
  A --> Hash[Hash Table]
  SW --> TP
```

| Subcategory | Path |
|---|---|
| 1D prefix sum array | [数据结构/Array - Prefix_Sum (前缀和_数组)/一维 - 前缀和数组(preSum Array)](./数据结构/Array%20-%20Prefix_Sum%20(前缀和_数组)/一维%20-%20前缀和数组(preSum%20Array)) |
| 1D prefix product array | [数据结构/Array - Prefix_Sum (前缀和_数组)/一维 - 前缀积数组(preProduce Array)](./数据结构/Array%20-%20Prefix_Sum%20(前缀和_数组)/一维%20-%20前缀积数组(preProduce%20Array)) |
| 2D prefix sum matrix | [数据结构/Array - Prefix_Sum (前缀和_数组)/二维 - 前缀和矩阵(preSum Matrix)](./数据结构/Array%20-%20Prefix_Sum%20(前缀和_数组)/二维%20-%20前缀和矩阵(preSum%20Matrix)) |
| Interval problems | [数据结构/Array基础题/区间题](./数据结构/Array基础题/区间题) |
| Circular array problems | [数据结构/Array基础题/环形数组(逻辑上的环形)](./数据结构/Array基础题/环形数组(逻辑上的环形)) |
| Sliding window | [算法思想/2 Pointers/同向2Pointers](./算法思想/2%20Pointers/同向2Pointers) |
| Binary search on arrays | [算法思想/2 Pointers/相向2Pointers](./算法思想/2%20Pointers/相向2Pointers) |

### Matrix · `38 files`

```mermaid
graph LR
  M[Matrix] --> DFS & BFS
  M --> BK[Backtracking]
  M --> DP[Grid DP]
  M --> PS[2D Prefix Sum]
  DFS --> Islands[Island Problems]
  BK --> NQ[N-Queens]
  BK --> Sudoku
  BK --> WS[Word Search]
```

| Subcategory | Path |
|---|---|
| Island problems (DFS) | [数据结构/矩阵/DFS岛屿问题](./数据结构/矩阵/DFS岛屿问题) |
| Shortest path in grid (BFS) | [数据结构/矩阵/BFS路径问题](./数据结构/矩阵/BFS路径问题) |
| N-Queens | [数据结构/矩阵/N皇后](./数据结构/矩阵/N皇后) |
| Word Search | [数据结构/矩阵/wordSearch](./数据结构/矩阵/wordSearch) |
| Sudoku solver | [数据结构/矩阵/数独](./数据结构/矩阵/数独) |
| 2D prefix sum | [数据结构/矩阵/前缀和PreSum矩阵](./数据结构/矩阵/前缀和PreSum矩阵) |
| DFS in matrix | [算法思想/DFS/DFS in 矩阵](./算法思想/DFS/DFS%20in%20矩阵) |
| BFS in matrix | [算法思想/BFS/BFS in 矩阵](./算法思想/BFS/BFS%20in%20矩阵) |

### Heap · `19 files`

```mermaid
graph LR
  H[Heap] --> Greedy
  H --> Sort[Heap Sort]
  H --> TopK[Top-K Problems]
  H --> Dijkstra[Dijkstra Base]
  TopK --> Greedy
```

| Subcategory | Path |
|---|---|
| All heap problems | [数据结构/Heap题目](./数据结构/Heap题目) |

### Trie · `8 files`

```mermaid
graph LR
  T[Trie] --> DFS[DFS word search]
  T --> BK[Backtracking]
  T --> Hash[Hash Table storage]
  BK --> AutoComplete[Auto-complete]
  BK --> WordConstruct[Word Construction]
```

| Subcategory | Path |
|---|---|
| All trie problems | [数据结构/Tire(前缀树，字典树）](./数据结构/Tire(前缀树，字典树）) |

### String · `7 files`

```mermaid
graph LR
  S[String] --> TP[Two Pointers]
  S --> DP[Edit Distance / LCS]
  S --> BK[Backtracking]
  S --> Hash[Hash Table]
  TP --> Palindrome
  BK --> Partition
  Hash --> Anagram
```

| Subcategory | Path |
|---|---|
| All string problems | [数据结构/String](./数据结构/String) |
| DFS in string | [算法思想/DFS/DFS in String](./算法思想/DFS/DFS%20in%20String) |
| BFS in string | [算法思想/BFS/BFS in 字符串](./算法思想/BFS/BFS%20in%20字符串) |

---

## Algorithm Techniques

### DFS · `113 files`

```mermaid
graph LR
  DFS --> BT[Binary Tree]
  DFS --> G[Graph]
  DFS --> Mat[Matrix]
  DFS --> Trie
  DFS --> Str[String]
  BT --> Pre[Preorder] & In[Inorder] & Post[Postorder]
  G  --> Cycle[Cycle Detection] & Topo[Topological Sort]
  Mat --> Islands[Island Problems]
```

| Subcategory | Path |
|---|---|
| DFS in binary tree | [算法思想/DFS/DFS in 二叉树 ](./算法思想/DFS/DFS%20in%20二叉树%20) |
| DFS in graph | [算法思想/DFS/DFS in 图](./算法思想/DFS/DFS%20in%20图) |
| DFS in matrix | [算法思想/DFS/DFS in 矩阵](./算法思想/DFS/DFS%20in%20矩阵) |
| DFS in n-ary tree | [算法思想/DFS/DFS in 多叉树](./算法思想/DFS/DFS%20in%20多叉树) |
| DFS in string | [算法思想/DFS/DFS in String](./算法思想/DFS/DFS%20in%20String) |

### BFS · `52 files`

```mermaid
graph LR
  BFS --> BT[Binary Tree level-order]
  BFS --> G[Graph]
  BFS --> Mat[Matrix shortest path]
  BFS --> Str[String]
  G --> Dijk[Dijkstra]
  G --> Topo[Kahn's Topo Sort]
```

| Subcategory | Path |
|---|---|
| BFS on binary tree | [算法思想/BFS/BFS 遍历 二叉树](./算法思想/BFS/BFS%20遍历%20二叉树) |
| BFS on graph | [算法思想/BFS/BFS in 图](./算法思想/BFS/BFS%20in%20图) |
| BFS on matrix | [算法思想/BFS/BFS in 矩阵](./算法思想/BFS/BFS%20in%20矩阵) |
| BFS on string | [算法思想/BFS/BFS in 字符串](./算法思想/BFS/BFS%20in%20字符串) |

### Two Pointers · `142 files`

```mermaid
graph LR
  TP[Two Pointers] --> SW[Sliding Window]
  TP --> Opp[Opposite Direction]
  TP --> Same[Same Direction]
  SW --> Fixed[Fixed Window]
  SW --> Variable[Variable Window]
  Opp --> NSum[N-Sum]
  Opp --> Palindrome
  Opp --> BS[Binary Search]
  Same --> FastSlow[Fast & Slow — LinkedList]
  Same --> Partition[Array Partition]
```

| Subcategory | Path |
|---|---|
| Same-direction pointers (fast/slow, sliding window) | [算法思想/2 Pointers/同向2Pointers](./算法思想/2%20Pointers/同向2Pointers) |
| Opposite-direction pointers (binary search, N-sum) | [算法思想/2 Pointers/相向2Pointers](./算法思想/2%20Pointers/相向2Pointers) |
| Mixed / unknown pattern | [算法思想/2 Pointers/未知2Pointers](./算法思想/2%20Pointers/未知2Pointers) |

### Dynamic Programming · `98 files`

```mermaid
graph LR
  DP --> Single[Single Sequence]
  DP --> Dual[Dual Sequence]
  DP --> Grid[Grid / Coordinate]
  DP --> Knapsack[Knapsack]
  DP --> Interval[Interval DP]
  DP --> Game[Game Theory]
  DP --> Tree[Tree DP]
  Single --> LIS[LIS] & Robber[House Robber] & WB[Word Break]
  Dual --> Edit[Edit Distance] & LCS
  Knapsack --> K01[0-1 Knapsack] & KComp[Complete Knapsack]
```

| Subcategory | Path |
|---|---|
| Single-sequence DP (LIS, House Robber, Word Break…) | [算法思想/Dynamic Programming/单序列 (30%)](./算法思想/Dynamic%20Programming/单序列%20(30%25)) |
| Dual-sequence DP (Edit Distance, LCS…) | [算法思想/Dynamic Programming/双序列 (30%)](./算法思想/Dynamic%20Programming/双序列%20(30%25)) |
| Grid / coordinate DP | [算法思想/Dynamic Programming/坐标类 (15%)](./算法思想/Dynamic%20Programming/坐标类%20(15%25)) |
| Knapsack (0-1 + complete) | [算法思想/Dynamic Programming/背包问题 (10%)](./算法思想/Dynamic%20Programming/背包问题%20(10%25)) |
| Interval DP | [算法思想/Dynamic Programming/区间类 (5%)](./算法思想/Dynamic%20Programming/区间类%20(5%25)) |
| Game theory DP | [算法思想/Dynamic Programming/博弈类](./算法思想/Dynamic%20Programming/博弈类) |
| Tree DP | [算法思想/Dynamic Programming/DP in Trees](./算法思想/Dynamic%20Programming/DP%20in%20Trees) |
| Palindrome DP | [算法思想/Dynamic Programming/回文串](./算法思想/Dynamic%20Programming/回文串) |
| Stock problems | [算法思想/Dynamic Programming/股票问题](./算法思想/Dynamic%20Programming/股票问题) |

### Backtracking · `59 files`

```mermaid
graph LR
  BK[Backtracking] --> Comb[Combination / Subsets]
  BK --> Perm[Permutation]
  BK --> Mat[Matrix]
  BK --> Tree
  BK --> Str[String]
  Comb --> NoRepeat[No-repeat no-reuse]
  Comb --> Reuse[No-repeat reusable]
  Comb --> Repeat[With-repeat no-reuse]
  Mat --> NQ[N-Queens] & Sudoku & WS[Word Search]
```

| Subcategory | Path |
|---|---|
| Combination & subsets | [算法思想/Backtracking](./算法思想/Backtracking) |
| Permutation variants | [算法思想/Backtracking](./算法思想/Backtracking) |
| Tree-based backtracking | [算法思想/Backtracking](./算法思想/Backtracking) |

### Greedy · `25 files`

```mermaid
graph LR
  Gr[Greedy] --> Arr[Array]
  Gr --> Heap[Priority Queue]
  Gr --> Graph[MST]
  Arr --> Interval[Interval Scheduling]
  Arr --> Jump[Jump Game]
  Arr --> Candy
```

| Subcategory | Path |
|---|---|
| All greedy problems | [算法思想/Greddy Algorithm](./算法思想/Greddy%20Algorithm) |
